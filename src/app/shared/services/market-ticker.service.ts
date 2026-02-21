import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, map, switchMap, tap, catchError, of, filter } from 'rxjs';

export interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MarketTickerService {
  private http = inject(HttpClient);
  private apiKey = 'VPSZP19X36SIH74Q';
  
  tickerData = signal<TickerItem[]>([]);
  showTicker = signal<boolean>(false);

  constructor() {
    this.startTickerUpdate();
  }

  private isMarketOpen(): boolean {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 100 + minutes;
    
    // 9:30 AM to 3:30 PM (930 to 1530)
    return currentTime >= 930 && currentTime <= 1530;
  }

  private startTickerUpdate() {
    // Initial fetch and then every 5 minutes
    interval(5 * 60 * 1000).pipe(
      filter(() => this.isMarketOpen()),
      switchMap(() => this.fetchMarketData()),
      catchError(err => {
        console.error('Market data fetch failed', err);
        this.showTicker.set(false);
        return of(null);
      })
    ).subscribe();
    
    // Force initial fetch if market is open
    if (this.isMarketOpen()) {
      this.fetchMarketData().subscribe();
    }
  }

  private fetchMarketData() {
    // Alpha Vantage Global Quote for some major Indian stocks (using tickers like NSE:RELIANCE)
    const symbols = ['NSE:NIFTY', 'NSE:RELIANCE', 'NSE:TCS', 'NSE:HDFCBANK', 'NSE:ICICIBANK'];
    
    // Note: Alpha Vantage free tier has limits. For a ticker, we might just fetch one or two major ones
    // or use a different endpoint. Global Quote is per symbol.
    // For simplicity and to stay within 500/day limit, we'll fetch a few.
    
    return this.http.get<any>(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=RELIANCE.BSE&apikey=${this.apiKey}`).pipe(
      map(response => {
        const quote = response['Global Quote'];
        if (quote && quote['05. price']) {
          const price = parseFloat(quote['05. price']).toFixed(2);
          const changePercent = quote['10. change percent'];
          const isPositive = !changePercent.startsWith('-');
          
          const data: TickerItem[] = [
            {
              symbol: 'RELIANCE',
              price: `₹${price}`,
              change: changePercent,
              isPositive: isPositive
            }
            // Add more if needed, but mind the API limits
          ];
          
          this.tickerData.set(data);
          this.showTicker.set(true);
          return data;
        } else {
          this.showTicker.set(false);
          return null;
        }
      }),
      catchError(() => {
        this.showTicker.set(false);
        return of(null);
      })
    );
  }
}

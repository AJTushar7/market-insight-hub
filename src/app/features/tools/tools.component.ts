import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { debounceTime, distinctUntilChanged, switchMap, of, catchError } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective, BaseChartDirective],
  template: `
    <section class="page-hero" appScrollAnimate>
      <div class="container">
        <h1>Investment Tools</h1>
        <p>Free calculators and tools to help plan your investments.</p>
      </div>
    </section>

    <section class="tools-content" appScrollAnimate>
      <div class="container">
        <!-- Stock Search Tool -->
        <div class="stock-search-tool card mb-8">
          <h3>Stock Analysis</h3>
          <p>Search for a stock name or symbol (e.g., Reliance, Tata, AAPL) to see performance data.</p>
          <div class="search-container mb-6">
            <div class="flex gap-4">
              <div class="flex-1 relative">
                <input 
                  type="text" 
                  [(ngModel)]="searchQuery" 
                  (ngModelChange)="onSearchInput($event)"
                  class="input-base w-full" 
                  placeholder="Search Stock..."
                  (focus)="showSuggestions = true"
                >
                <!-- Suggestions Dropdown -->
                <div *ngIf="showSuggestions && suggestions().length > 0" class="suggestions-dropdown">
                  <div 
                    *ngFor="let suggestion of suggestions()" 
                    (click)="selectSuggestion(suggestion)"
                    class="suggestion-item"
                  >
                    <span class="symbol">{{ suggestion.symbol }}</span>
                    <span class="name">{{ suggestion.name }}</span>
                  </div>
                </div>
              </div>
              <button (click)="searchStock()" class="btn-primary" [disabled]="loadingSearch()">
                {{ loadingSearch() ? 'Searching...' : 'Search' }}
              </button>
            </div>
          </div>

          <!-- Stock Data Display -->
          <div *ngIf="stockData" class="stock-dashboard mt-6">
             <div class="stock-header mb-6">
               <div class="title-info">
                 <h2>{{ stockData.symbol }}</h2>
                 <span class="company-name">{{ stockData.name }}</span>
               </div>
               <div class="price-info text-right">
                 <div class="current-price">{{ stockData.currency === 'INR' ? '₹' : '$' }}{{ stockData.price }}</div>
                 <div class="price-change" [class.positive]="stockData.isPositive" [class.negative]="!stockData.isPositive">
                   {{ stockData.isPositive ? '▲' : '▼' }} {{ stockData.changePercent }}% ({{ stockData.currency === 'INR' ? '₹' : '$' }}{{ stockData.change }})
                 </div>
               </div>
             </div>

             <div class="chart-container-wrapper p-4 bg-chart shadow-inner rounded-xl mb-8">
               <div class="chart-container" style="height: 400px; width: 100%;">
                  <canvas baseChart
                     [data]="chartData"
                     [options]="chartOptions"
                     [type]="chartType">
                   </canvas>
               </div>
             </div>

             <div class="stock-metrics mt-8">
               <div class="metric-card">
                 <span class="label">Volume</span>
                 <span class="value">{{ stockData.volume | number }}</span>
               </div>
               <div class="metric-card">
                 <span class="label">Open</span>
                 <span class="value">₹{{ stockData.open }}</span>
               </div>
               <div class="metric-card">
                 <span class="label">High</span>
                 <span class="value">₹{{ stockData.high }}</span>
               </div>
               <div class="metric-card">
                 <span class="label">Low</span>
                 <span class="value">₹{{ stockData.low }}</span>
               </div>
               <div class="metric-card">
                 <span class="label">Prev Close</span>
                 <span class="value">₹{{ stockData.prevClose }}</span>
               </div>
             </div>
          </div>
          <div *ngIf="searchError" class="error-msg mt-4">{{ searchError }}</div>
        </div>

        <div class="tools-grid">
          <!-- SIP Calculator -->
          <div class="tool-card">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="8" y1="10" x2="16" y2="10"></line>
                <line x1="8" y1="14" x2="16" y2="14"></line>
                <line x1="8" y1="18" x2="12" y2="18"></line>
              </svg>
              SIP Calculator
            </h3>
            <p>Calculate your SIP returns over time.</p>

            <div class="calculator-form">
              <div class="form-group">
                <label>Monthly Investment (₹)</label>
                <input type="number" [(ngModel)]="sipMonthly" (ngModelChange)="calculateSIP()" min="500" placeholder="10000">
              </div>
              <div class="form-group">
                <label>Expected Annual Return (%)</label>
                <input type="number" [(ngModel)]="sipReturn" (ngModelChange)="calculateSIP()" min="1" max="30" placeholder="12">
              </div>
              <div class="form-group">
                <label>Time Period (Years)</label>
                <input type="number" [(ngModel)]="sipYears" (ngModelChange)="calculateSIP()" min="1" max="40" placeholder="10">
              </div>
            </div>

            <div class="calculator-results">
              <div class="result-item">
                <span class="result-label">Invested Amount</span>
                <span class="result-value">₹{{ sipInvested() | number }}</span>
              </div>
              <div class="result-item">
                <span class="result-label">Est. Returns</span>
                <span class="result-value positive">₹{{ sipReturns() | number }}</span>
              </div>
              <div class="result-item highlight">
                <span class="result-label">Total Value</span>
                <span class="result-value">₹{{ sipTotal() | number }}</span>
              </div>
            </div>
          </div>

          <!-- CAGR Calculator -->
          <div class="tool-card">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
                <polyline points="17,6 23,6 23,12"></polyline>
              </svg>
              CAGR Calculator
            </h3>
            <p>Calculate Compound Annual Growth Rate.</p>

            <div class="calculator-form">
              <div class="form-group">
                <label>Initial Investment (₹)</label>
                <input type="number" [(ngModel)]="cagrInitial" (ngModelChange)="calculateCAGR()" min="1000" placeholder="100000">
              </div>
              <div class="form-group">
                <label>Final Value (₹)</label>
                <input type="number" [(ngModel)]="cagrFinal" (ngModelChange)="calculateCAGR()" min="1000" placeholder="200000">
              </div>
              <div class="form-group">
                <label>Time Period (Years)</label>
                <input type="number" [(ngModel)]="cagrYears" (ngModelChange)="calculateCAGR()" min="1" max="50" placeholder="5">
              </div>
            </div>

            <div class="calculator-results">
              <div class="result-item highlight">
                <span class="result-label">CAGR</span>
                <span class="result-value positive">{{ cagrResult() | number: '1.2-2' }}%</span>
              </div>
              <div class="result-item">
                <span class="result-label">Absolute Returns</span>
                <span class="result-value">{{ absoluteReturns() | number: '1.2-2' }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .page-hero {
        padding: $space-16 0;
        background: $bg-secondary;
        text-align: center;
        h1 { @include heading-1; margin-bottom: $space-4; }
        p { @include body-large; color: $text-secondary; }
      }

      .tools-content { @include section-padding; }

      .tools-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-8;
        max-width: 900px;
        margin: 0 auto;
        @include md { grid-template-columns: repeat(2, 1fr); }
      }

      .tool-card, .stock-search-tool {
        @include card;
        h3 {
          display: flex;
          align-items: center;
          gap: $space-3;
          font-size: $text-xl;
          margin-bottom: $space-3;
          svg { color: $primary-500; }
        }
        > p { color: $text-secondary; font-size: $text-sm; margin-bottom: $space-6; }
      }

      .search-container {
        position: relative;
        .suggestions-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: $bg-secondary;
          border: 1px solid $border-light;
          border-radius: $radius-md;
          z-index: 1000;
          max-height: 250px;
          overflow-y: auto;
          box-shadow: $shadow-lg;
          margin-top: $space-1;
        }
        .suggestion-item {
          padding: $space-3 $space-4;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid $border-light;
          &:hover { background: rgba($primary-500, 0.1); }
          &:last-child { border-bottom: none; }
          .symbol { font-weight: $font-bold; color: $primary-500; }
          .name { color: $text-secondary; font-size: $text-sm; }
        }
      }

      .stock-dashboard {
        .stock-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          h2 { font-size: $text-3xl; margin-bottom: $space-1; color: $primary-500; }
          .company-name { color: $text-secondary; font-size: $text-sm; }
          .current-price { font-size: $text-4xl; font-weight: $font-bold; font-family: $font-mono; }
          .price-change { font-size: $text-lg; font-weight: $font-semibold; display: flex; align-items: center; gap: $space-1; }
        }
      }

      .bg-chart {
        background: rgba($primary-500, 0.02);
        border: 1px solid rgba($primary-500, 0.1);
      }

      .stock-metrics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: $space-4;
        .metric-card {
          background: rgba($primary-500, 0.05);
          padding: $space-4;
          border-radius: $radius-lg;
          display: flex;
          flex-direction: column;
          gap: $space-1;
          .label { font-size: $text-xs; color: $text-secondary; text-transform: uppercase; }
          .value { font-size: $text-lg; font-weight: $font-bold; font-family: $font-mono; }
        }
      }

      .calculator-form { margin-bottom: $space-6; }
      .form-group {
        margin-bottom: $space-4;
        label { display: block; font-size: $text-sm; font-weight: $font-medium; color: $text-primary; margin-bottom: $space-2; }
        input { @include input-base; }
      }

      .calculator-results { border-top: 1px solid $border-light; padding-top: $space-4; }
      .result-item {
        @include flex-between;
        padding: $space-3 0;
        border-bottom: 1px solid $border-light;
        &:last-child { border-bottom: none; }
        &.highlight {
          padding: $space-4;
          background: rgba($primary-500, 0.1);
          border-radius: $radius-lg;
          border-bottom: none;
          margin-top: $space-2;
          .result-value { font-size: $text-xl; color: $primary-500; }
        }
        .result-label { font-size: $text-sm; color: $text-secondary; }
        .result-value { font-family: $font-mono; font-weight: $font-semibold; color: $text-primary; }
      }

      .positive { color: $stock-green !important; }
      .negative { color: $stock-red !important; }
      .error-msg { color: $stock-red; font-size: $text-sm; }
    `,
  ],
})
export class ToolsComponent {
  private http = inject(HttpClient);
  private apiKey = 'VPSZP19X36SIH74Q';

  searchQuery = '';
  showSuggestions = false;
  suggestions = signal<any[]>([]);
  loadingSearch = signal(false);
  searchError = '';
  stockData: any = null;
  
  private searchSubject = new Subject<string>();

  // Chart Properties
  chartData: ChartConfiguration['data'] = { labels: [], datasets: [] };
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#6E7681' } },
      y: { grid: { color: 'rgba(110, 118, 129, 0.1)' }, ticks: { color: '#6E7681' } }
    }
  };
  chartType: ChartType = 'line';

  // SIP Calculator
  sipMonthly = 10000; sipReturn = 12; sipYears = 10;
  sipInvested = signal(0); sipReturns = signal(0); sipTotal = signal(0);

  // CAGR Calculator
  cagrInitial = 100000; cagrFinal = 200000; cagrYears = 5;
  cagrResult = signal(0); absoluteReturns = signal(0);

  constructor() {
    this.calculateSIP();
    this.calculateCAGR();

    // Setup autocomplete
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        if (!query || query.length < 2) return of({ bestMatches: [] });
        // Use Alpha Vantage Symbol Search for auto-recommendations
        return this.http.get<any>(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${this.apiKey}`);
      }),
      catchError(() => of({ bestMatches: [] }))
    ).subscribe(data => {
      const matches = data.bestMatches || [];
      this.suggestions.set(matches.map((m: any) => ({
        symbol: m['1. symbol'],
        name: m['2. name'],
        type: m['3. type'],
        region: m['4. region'],
        currency: m['8. currency']
      })));
    });
  }

  onSearchInput(query: string) {
    if (query && query.length >= 2) {
      this.showSuggestions = true;
      this.searchSubject.next(query);
    } else {
      this.showSuggestions = false;
      this.suggestions.set([]);
    }
  }

  selectSuggestion(suggestion: any) {
    this.searchQuery = suggestion.symbol;
    this.showSuggestions = false;
    this.searchStock();
  }

  searchStock() {
    let symbol = this.searchQuery.trim().toUpperCase();
    if (!symbol) return;

    this.loadingSearch.set(true);
    this.searchError = '';
    this.showSuggestions = false;
    this.stockData = null;

    // Direct search first
    this.executeSearch(symbol);
  }

  private executeSearch(symbol: string) {
    const quoteUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${this.apiKey}`;
    
    this.http.get<any>(quoteUrl).subscribe({
      next: (quoteData) => {
        const quote = quoteData['Global Quote'];
        if (quote && quote['05. price']) {
          this.fetchChartAndDisplay(symbol, quote);
        } else {
          // If no result and not an Indian suffix, try .BSE automatically for Indian context
          if (!symbol.includes('.') && !symbol.includes(':')) {
            const bseSymbol = symbol + '.BSE';
            this.http.get<any>(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${bseSymbol}&apikey=${this.apiKey}`).subscribe(bseData => {
              const bseQuote = bseData['Global Quote'];
              if (bseQuote && bseQuote['05. price']) {
                this.fetchChartAndDisplay(bseSymbol, bseQuote);
              } else {
                this.searchError = 'Stock not found. Try selecting from suggestions.';
                this.loadingSearch.set(false);
              }
            });
          } else {
            this.searchError = 'Stock not found. Please select from suggestions.';
            this.loadingSearch.set(false);
          }
        }
      },
      error: () => {
        this.searchError = 'API Error. Please check your connection.';
        this.loadingSearch.set(false);
      }
    });
  }

  private fetchChartAndDisplay(symbol: string, quote: any) {
    const seriesUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apiKey}`;
    
    this.http.get<any>(seriesUrl).subscribe({
      next: (seriesData) => {
        const timeSeries = seriesData['Time Series (Daily)'];
        if (timeSeries) {
          const labels = Object.keys(timeSeries).reverse().slice(-30);
          const prices = labels.map(date => parseFloat(timeSeries[date]['4. close']));
          
          this.chartData = {
            labels: labels.map(d => d.split('-').slice(1).join('/')),
            datasets: [{
              data: prices,
              label: symbol,
              borderColor: '#00BFA6',
              backgroundColor: 'rgba(0, 191, 166, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 2,
              pointHoverRadius: 5
            }]
          };

          const suggestion = this.suggestions().find(s => s.symbol === symbol);
          this.stockData = {
            symbol: symbol,
            name: suggestion?.name || symbol,
            price: parseFloat(quote['05. price']).toFixed(2),
            change: parseFloat(quote['09. change']).toFixed(2),
            changePercent: quote['10. change percent'].replace('%', ''),
            isPositive: !quote['10. change percent'].startsWith('-'),
            volume: quote['06. volume'],
            open: parseFloat(quote['02. open']).toFixed(2),
            high: parseFloat(quote['03. high']).toFixed(2),
            low: parseFloat(quote['04. low']).toFixed(2),
            prevClose: parseFloat(quote['08. previous close']).toFixed(2),
            currency: suggestion?.currency || 'INR'
          };
        } else {
          this.searchError = 'Could not load chart data. Standard limit might be reached.';
        }
        this.loadingSearch.set(false);
      },
      error: () => {
        this.searchError = 'Error loading chart.';
        this.loadingSearch.set(false);
      }
    });
  }

  calculateSIP() {
    if (!this.sipMonthly || !this.sipYears) return;
    const rate = this.sipReturn || 12;
    const monthlyRate = rate / 12 / 100;
    const months = this.sipYears * 12;
    const invested = this.sipMonthly * months;
    const fv = monthlyRate === 0 ? invested : 
      this.sipMonthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    this.sipInvested.set(Math.round(invested));
    this.sipTotal.set(Math.round(fv));
    this.sipReturns.set(Math.round(fv - invested));
  }

  calculateCAGR() {
    if (!this.cagrInitial || !this.cagrFinal || !this.cagrYears) return;
    if (this.cagrInitial > 0 && this.cagrYears > 0) {
      const cagr = (Math.pow(this.cagrFinal / this.cagrInitial, 1 / this.cagrYears) - 1) * 100;
      const absolute = ((this.cagrFinal - this.cagrInitial) / this.cagrInitial) * 100;
      this.cagrResult.set(cagr);
      this.absoluteReturns.set(absolute);
    }
  }
}

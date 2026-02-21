import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

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
          <p>Search for a stock symbol (e.g., TSLA, AAPL, RELIANCE.BSE) to see performance data.</p>
          <div class="flex gap-4 mb-6">
            <input type="text" [(ngModel)]="searchSymbol" class="input-base" placeholder="Enter Symbol...">
            <button (click)="searchStock()" class="btn-primary" [disabled]="loadingSearch()">
              {{ loadingSearch() ? 'Searching...' : 'Search' }}
            </button>
          </div>

          <div *ngIf="chartData" class="chart-container" style="height: 400px; width: 100%;">
             <canvas baseChart
                [data]="chartData"
                [options]="chartOptions"
                [type]="chartType">
              </canvas>
          </div>
          <div *ngIf="searchError" class="error-msg mt-4">{{ searchError }}</div>
        </div>

        <div class="tools-grid">
          <!-- SIP Calculator -->
          <div class="tool-card">
            <h3>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
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
                <input
                  type="number"
                  [(ngModel)]="sipMonthly"
                  (ngModelChange)="calculateSIP()"
                  min="500"
                  placeholder="10000"
                />
              </div>
              <div class="form-group">
                <label>Expected Annual Return (%)</label>
                <input
                  type="number"
                  [(ngModel)]="sipReturn"
                  (ngModelChange)="calculateSIP()"
                  min="1"
                  max="30"
                  placeholder="12"
                />
              </div>
              <div class="form-group">
                <label>Time Period (Years)</label>
                <input
                  type="number"
                  [(ngModel)]="sipYears"
                  (ngModelChange)="calculateSIP()"
                  min="1"
                  max="40"
                  placeholder="10"
                />
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
                <polyline points="17,6 23,6 23,12"></polyline>
              </svg>
              CAGR Calculator
            </h3>
            <p>Calculate Compound Annual Growth Rate.</p>

            <div class="calculator-form">
              <div class="form-group">
                <label>Initial Investment (₹)</label>
                <input
                  type="number"
                  [(ngModel)]="cagrInitial"
                  (ngModelChange)="calculateCAGR()"
                  min="1000"
                  placeholder="100000"
                />
              </div>
              <div class="form-group">
                <label>Final Value (₹)</label>
                <input
                  type="number"
                  [(ngModel)]="cagrFinal"
                  (ngModelChange)="calculateCAGR()"
                  min="1000"
                  placeholder="200000"
                />
              </div>
              <div class="form-group">
                <label>Time Period (Years)</label>
                <input
                  type="number"
                  [(ngModel)]="cagrYears"
                  (ngModelChange)="calculateCAGR()"
                  min="1"
                  max="50"
                  placeholder="5"
                />
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

        h1 {
          @include heading-1;
          margin-bottom: $space-4;
        }
        p {
          @include body-large;
          color: $text-secondary;
        }
      }

      .tools-content {
        @include section-padding;
      }

      .tools-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-8;
        max-width: 900px;
        margin: 0 auto;

        @include md {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .tool-card, .stock-search-tool {
        @include card;

        h3 {
          display: flex;
          align-items: center;
          gap: $space-3;
          font-size: $text-xl;
          margin-bottom: $space-3;

          svg {
            color: $primary-500;
          }
        }

        > p {
          color: $text-secondary;
          font-size: $text-sm;
          margin-bottom: $space-6;
        }
      }

      .calculator-form {
        margin-bottom: $space-6;
      }

      .form-group {
        margin-bottom: $space-4;

        label {
          display: block;
          font-size: $text-sm;
          font-weight: $font-medium;
          color: $text-primary;
          margin-bottom: $space-2;
        }

        input {
          @include input-base;
        }
      }

      .calculator-results {
        border-top: 1px solid $border-light;
        padding-top: $space-4;
      }

      .result-item {
        @include flex-between;
        padding: $space-3 0;
        border-bottom: 1px solid $border-light;

        &:last-child {
          border-bottom: none;
        }

        &.highlight {
          padding: $space-4;
          background: rgba($primary-500, 0.1);
          border-radius: $radius-lg;
          border-bottom: none;
          margin-top: $space-2;

          .result-value {
            font-size: $text-xl;
            color: $primary-500;
          }
        }

        .result-label {
          font-size: $text-sm;
          color: $text-secondary;
        }

        .result-value {
          font-family: $font-mono;
          font-weight: $font-semibold;
          color: $text-primary;

          &.positive {
            color: $stock-green;
          }
        }
      }

      .error-msg {
        color: $stock-red;
        font-size: $text-sm;
      }
    `,
  ],
})
export class ToolsComponent {
  private http = inject(HttpClient);
  private apiKey = 'VPSZP19X36SIH74Q';

  searchSymbol = '';
  loadingSearch = signal(false);
  searchError = '';
  chartData?: ChartConfiguration['data'];
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: { beginAtZero: false }
    }
  };
  chartType: ChartType = 'line';

  // SIP Calculator
  sipMonthly = 10000;
  sipReturn = 12;
  sipYears = 10;
  sipInvested = signal(0);
  sipReturns = signal(0);
  sipTotal = signal(0);

  // CAGR Calculator
  cagrInitial = 100000;
  cagrFinal = 200000;
  cagrYears = 5;
  cagrResult = signal(0);
  absoluteReturns = signal(0);

  constructor() {
    this.calculateSIP();
    this.calculateCAGR();
  }

  searchStock() {
    if (!this.searchSymbol) return;
    this.loadingSearch.set(true);
    this.searchError = '';
    
    this.http.get<any>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.searchSymbol}&apikey=${this.apiKey}`)
      .subscribe({
        next: (data) => {
          const timeSeries = data['Time Series (Daily)'];
          if (timeSeries) {
            const labels = Object.keys(timeSeries).reverse().slice(-30); // Last 30 days
            const prices = labels.map(date => parseFloat(timeSeries[date]['4. close']));
            
            this.chartData = {
              labels: labels,
              datasets: [{
                data: prices,
                label: this.searchSymbol,
                borderColor: '#00BFA6',
                backgroundColor: 'rgba(0, 191, 166, 0.1)',
                fill: true,
                tension: 0.4
              }]
            };
            this.loadingSearch.set(false);
          } else {
            this.searchError = 'Symbol not found or limit reached.';
            this.loadingSearch.set(false);
          }
        },
        error: () => {
          this.searchError = 'An error occurred. Please try again later.';
          this.loadingSearch.set(false);
        }
      });
  }

  calculateSIP() {
    if (!this.sipMonthly || !this.sipYears) {
      this.sipInvested.set(0);
      this.sipTotal.set(0);
      this.sipReturns.set(0);
      return;
    }

    // Default to 12% if not provided
    const rate = this.sipReturn || 12;
    const monthlyRate = rate / 12 / 100;
    const months = this.sipYears * 12;
    const invested = this.sipMonthly * months;

    let fv = 0;
    if (monthlyRate === 0) {
      fv = invested;
    } else {
      fv =
        this.sipMonthly *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
    }

    this.sipInvested.set(Math.round(invested));
    this.sipTotal.set(Math.round(fv));
    this.sipReturns.set(Math.round(fv - invested));
  }

  calculateCAGR() {
    if (!this.cagrInitial || !this.cagrFinal || !this.cagrYears) {
      this.cagrResult.set(0);
      this.absoluteReturns.set(0);
      return;
    }

    if (this.cagrInitial > 0 && this.cagrYears > 0) {
      const cagr = (Math.pow(this.cagrFinal / this.cagrInitial, 1 / this.cagrYears) - 1) * 100;
      const absolute = ((this.cagrFinal - this.cagrInitial) / this.cagrInitial) * 100;

      this.cagrResult.set(cagr);
      this.absoluteReturns.set(absolute);
    }
  }
}

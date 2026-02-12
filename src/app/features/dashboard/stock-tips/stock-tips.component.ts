import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-tips',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>Stock Tips</h1>
    <p>Dashboard content.</p>
  </div>`,
})
export class StockTipsComponent {}

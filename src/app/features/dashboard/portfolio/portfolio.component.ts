import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>Portfolio</h1>
    <p>Dashboard content.</p>
  </div>`,
})
export class PortfolioComponent {}

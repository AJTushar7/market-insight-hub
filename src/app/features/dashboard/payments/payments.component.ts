import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>Payment History</h1>
    <p>Dashboard content.</p>
  </div>`,
})
export class PaymentsComponent {}

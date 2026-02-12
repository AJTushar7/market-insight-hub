import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container py-12">
    <h1>Refund Policy</h1>
    <p>Legal content goes here.</p>
  </div>`,
})
export class RefundComponent {}

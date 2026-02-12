import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container py-12">
    <h1>Disclaimer</h1>
    <p>Legal content goes here.</p>
  </div>`,
})
export class DisclaimerComponent {}

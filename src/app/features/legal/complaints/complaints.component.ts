import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container py-12">
    <h1>Complaints</h1>
    <p>Legal content goes here.</p>
  </div>`,
})
export class ComplaintsComponent {}

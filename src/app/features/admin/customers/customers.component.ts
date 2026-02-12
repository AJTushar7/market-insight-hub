import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  template: `<div><h1>Customers Management</h1></div>`,
})
export class CustomersComponent {}

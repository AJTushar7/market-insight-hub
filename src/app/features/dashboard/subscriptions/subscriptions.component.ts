import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>My Subscriptions</h1>
    <p>Dashboard content.</p>
  </div>`,
})
export class SubscriptionsComponent {}

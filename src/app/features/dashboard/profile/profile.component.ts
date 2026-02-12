import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>My Profile</h1>
    <p>Dashboard content.</p>
  </div>`,
})
export class ProfileComponent {}

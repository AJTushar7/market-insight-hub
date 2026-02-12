import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>My Courses</h1>
    <p>Dashboard content.</p>
  </div>`,
})
export class MyCoursesComponent {}

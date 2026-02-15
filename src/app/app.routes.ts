import { Routes } from '@angular/router';

export const routes: Routes = [
  // Public Pages
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    data: { title: 'Rising Stock of India - SEBI Registered Stock Advisory' },
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
    data: { title: 'About Us - Rising Stock of India' },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services.component').then((m) => m.ServicesComponent),
    data: { title: 'Our Services - Rising Stock of India' },
  },
  {
    path: 'services/:slug',
    loadComponent: () =>
      import('./features/services/service-detail/service-detail.component').then(
        (m) => m.ServiceDetailComponent,
      ),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./features/courses/courses.component').then((m) => m.CoursesComponent),
    data: { title: 'Stock Market Courses - Rising Stock of India' },
  },
  {
    path: 'courses/:slug',
    loadComponent: () =>
      import('./features/courses/course-detail/course-detail.component').then(
        (m) => m.CourseDetailComponent,
      ),
  },
  {
    path: 'tools',
    loadComponent: () => import('./features/tools/tools.component').then((m) => m.ToolsComponent),
    data: { title: 'Investment Tools - Rising Stock of India' },
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent),
    data: { title: 'Blog - Rising Stock of India' },
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./features/blog/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
    data: { title: 'Contact Us - Rising Stock of India' },
  },

  // Legal Pages
  {
    path: 'legal',
    children: [
      {
        path: 'terms',
        loadComponent: () =>
          import('./features/legal/terms/terms.component').then((m) => m.TermsComponent),
        data: { title: 'Terms & Conditions - Rising Stock of India' },
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('./features/legal/privacy/privacy.component').then((m) => m.PrivacyComponent),
        data: { title: 'Privacy Policy - Rising Stock of India' },
      },
      {
        path: 'disclaimer',
        loadComponent: () =>
          import('./features/legal/disclaimer/disclaimer.component').then(
            (m) => m.DisclaimerComponent,
          ),
        data: { title: 'Disclaimer - Rising Stock of India' },
      },
      {
        path: 'refund',
        loadComponent: () =>
          import('./features/legal/refund/refund.component').then((m) => m.RefundComponent),
        data: { title: 'Refund Policy - Rising Stock of India' },
      },
      {
        path: 'complaints',
        loadComponent: () =>
          import('./features/legal/complaints/complaints.component').then(
            (m) => m.ComplaintsComponent,
          ),
        data: { title: 'Client Complaints - Rising Stock of India' },
      },
    ],
  },

  // Wildcard - 404
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    data: { title: 'Page Not Found - Rising Stock of India' },
  },
];

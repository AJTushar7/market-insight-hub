import { Routes } from '@angular/router';

export const routes: Routes = [
  // Public Pages
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    data: { title: 'Rising Stock of India - SEBI Registered Stock Advisory' },
  },
  //   {
  //     path: 'about',
  //     loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  //     data: { title: 'About Us - Rising Stock of India' },
  //   },
  //   {
  //     path: 'services',
  //     loadComponent: () =>
  //       import('./features/services/services.component').then((m) => m.ServicesComponent),
  //     data: { title: 'Our Services - Rising Stock of India' },
  //   },
  //   {
  //     path: 'services/:slug',
  //     loadComponent: () =>
  //       import('./features/services/service-detail/service-detail.component').then(
  //         (m) => m.ServiceDetailComponent,
  //       ),
  //   },
  //   {
  //     path: 'courses',
  //     loadComponent: () =>
  //       import('./features/courses/courses.component').then((m) => m.CoursesComponent),
  //     data: { title: 'Stock Market Courses - Rising Stock of India' },
  //   },
  //   {
  //     path: 'courses/:slug',
  //     loadComponent: () =>
  //       import('./features/courses/course-detail/course-detail.component').then(
  //         (m) => m.CourseDetailComponent,
  //       ),
  //   },
  //   {
  //     path: 'tools',
  //     loadComponent: () => import('./features/tools/tools.component').then((m) => m.ToolsComponent),
  //     data: { title: 'Investment Tools - Rising Stock of India' },
  //   },
  //   {
  //     path: 'blog',
  //     loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent),
  //     data: { title: 'Blog - Rising Stock of India' },
  //   },
  //   {
  //     path: 'blog/:slug',
  //     loadComponent: () =>
  //       import('./features/blog/blog-detail/blog-detail.component').then(
  //         (m) => m.BlogDetailComponent,
  //       ),
  //   },
  //   {
  //     path: 'contact',
  //     loadComponent: () =>
  //       import('./features/contact/contact.component').then((m) => m.ContactComponent),
  //     data: { title: 'Contact Us - Rising Stock of India' },
  //   },

  // Authentication
  //   {
  //     path: 'auth',
  //     children: [
  //       {
  //         path: 'login',
  //         loadComponent: () =>
  //           import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  //         data: { title: 'Login - Rising Stock of India' },
  //       },
  //       {
  //         path: 'register',
  //         loadComponent: () =>
  //           import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
  //         data: { title: 'Register - Rising Stock of India' },
  //       },
  //       {
  //         path: 'forgot-password',
  //         loadComponent: () =>
  //           import('./features/auth/forgot-password/forgot-password.component').then(
  //             (m) => m.ForgotPasswordComponent,
  //           ),
  //         data: { title: 'Forgot Password - Rising Stock of India' },
  //       },
  //       {
  //         path: 'reset-password',
  //         loadComponent: () =>
  //           import('./features/auth/reset-password/reset-password.component').then(
  //             (m) => m.ResetPasswordComponent,
  //           ),
  //         data: { title: 'Reset Password - Rising Stock of India' },
  //       },
  //       {
  //         path: '',
  //         redirectTo: 'login',
  //         pathMatch: 'full',
  //       },
  //     ],
  //   },

  // Legal Pages
  //   {
  //     path: 'legal',
  //     children: [
  //       {
  //         path: 'terms',
  //         loadComponent: () =>
  //           import('./features/legal/terms/terms.component').then((m) => m.TermsComponent),
  //         data: { title: 'Terms & Conditions - Rising Stock of India' },
  //       },
  //       {
  //         path: 'privacy',
  //         loadComponent: () =>
  //           import('./features/legal/privacy/privacy.component').then((m) => m.PrivacyComponent),
  //         data: { title: 'Privacy Policy - Rising Stock of India' },
  //       },
  //       {
  //         path: 'disclaimer',
  //         loadComponent: () =>
  //           import('./features/legal/disclaimer/disclaimer.component').then(
  //             (m) => m.DisclaimerComponent,
  //           ),
  //         data: { title: 'Disclaimer - Rising Stock of India' },
  //       },
  //       {
  //         path: 'refund',
  //         loadComponent: () =>
  //           import('./features/legal/refund/refund.component').then((m) => m.RefundComponent),
  //         data: { title: 'Refund Policy - Rising Stock of India' },
  //       },
  //       {
  //         path: 'complaints',
  //         loadComponent: () =>
  //           import('./features/legal/complaints/complaints.component').then(
  //             (m) => m.ComplaintsComponent,
  //           ),
  //         data: { title: 'Client Complaints - Rising Stock of India' },
  //       },
  //     ],
  //   },

  // Customer Dashboard (Protected)
  //   {
  //     path: 'dashboard',
  //     // canActivate: [AuthGuard],
  //     loadComponent: () =>
  //       import('./features/dashboard/dashboard-layout.component').then(
  //         (m) => m.DashboardLayoutComponent,
  //       ),
  //     children: [
  //       {
  //         path: '',
  //         loadComponent: () =>
  //           import('./features/dashboard/overview/overview.component').then(
  //             (m) => m.OverviewComponent,
  //           ),
  //         data: { title: 'Dashboard - Rising Stock of India' },
  //       },
  //       {
  //         path: 'courses',
  //         loadComponent: () =>
  //           import('./features/dashboard/my-courses/my-courses.component').then(
  //             (m) => m.MyCoursesComponent,
  //           ),
  //         data: { title: 'My Courses - Rising Stock of India' },
  //       },
  //       {
  //         path: 'portfolio',
  //         loadComponent: () =>
  //           import('./features/dashboard/portfolio/portfolio.component').then(
  //             (m) => m.PortfolioComponent,
  //           ),
  //         data: { title: 'Portfolio Tracker - Rising Stock of India' },
  //       },
  //       {
  //         path: 'tips',
  //         loadComponent: () =>
  //           import('./features/dashboard/stock-tips/stock-tips.component').then(
  //             (m) => m.StockTipsComponent,
  //           ),
  //         data: { title: 'Stock Tips - Rising Stock of India' },
  //       },
  //       {
  //         path: 'subscriptions',
  //         loadComponent: () =>
  //           import('./features/dashboard/subscriptions/subscriptions.component').then(
  //             (m) => m.SubscriptionsComponent,
  //           ),
  //         data: { title: 'My Subscriptions - Rising Stock of India' },
  //       },
  //       {
  //         path: 'payments',
  //         loadComponent: () =>
  //           import('./features/dashboard/payments/payments.component').then(
  //             (m) => m.PaymentsComponent,
  //           ),
  //         data: { title: 'Payment History - Rising Stock of India' },
  //       },
  //       {
  //         path: 'profile',
  //         loadComponent: () =>
  //           import('./features/dashboard/profile/profile.component').then((m) => m.ProfileComponent),
  //         data: { title: 'My Profile - Rising Stock of India' },
  //       },
  //     ],
  //   },

  // Admin Dashboard (Protected - Admin Role)
  //   {
  //     path: 'admin',
  //     // canActivate: [AuthGuard, AdminGuard],
  //     loadComponent: () =>
  //       import('./features/admin/admin-layout.component').then((m) => m.AdminLayoutComponent),
  //     children: [
  //       {
  //         path: '',
  //         loadComponent: () =>
  //           import('./features/admin/dashboard/admin-dashboard.component').then(
  //             (m) => m.AdminDashboardComponent,
  //           ),
  //         data: { title: 'Admin Dashboard - Rising Stock of India' },
  //       },
  //       {
  //         path: 'customers',
  //         loadComponent: () =>
  //           import('./features/admin/customers/customers.component').then(
  //             (m) => m.CustomersComponent,
  //           ),
  //         data: { title: 'Customers - Admin' },
  //       },
  //       {
  //         path: 'subscriptions',
  //         loadComponent: () =>
  //           import('./features/admin/admin-subscriptions/admin-subscriptions.component').then(
  //             (m) => m.AdminSubscriptionsComponent,
  //           ),
  //         data: { title: 'Subscriptions - Admin' },
  //       },
  //       {
  //         path: 'payments',
  //         loadComponent: () =>
  //           import('./features/admin/admin-payments/admin-payments.component').then(
  //             (m) => m.AdminPaymentsComponent,
  //           ),
  //         data: { title: 'Payments - Admin' },
  //       },
  //       {
  //         path: 'courses',
  //         loadComponent: () =>
  //           import('./features/admin/courses-manager/courses-manager.component').then(
  //             (m) => m.CoursesManagerComponent,
  //           ),
  //         data: { title: 'Courses Manager - Admin' },
  //       },
  //       {
  //         path: 'tips',
  //         loadComponent: () =>
  //           import('./features/admin/tips-manager/tips-manager.component').then(
  //             (m) => m.TipsManagerComponent,
  //           ),
  //         data: { title: 'Stock Tips Manager - Admin' },
  //       },
  //       {
  //         path: 'services',
  //         loadComponent: () =>
  //           import('./features/admin/services-manager/services-manager.component').then(
  //             (m) => m.ServicesManagerComponent,
  //           ),
  //         data: { title: 'Services Manager - Admin' },
  //       },
  //       {
  //         path: 'blog',
  //         loadComponent: () =>
  //           import('./features/admin/blog-manager/blog-manager.component').then(
  //             (m) => m.BlogManagerComponent,
  //           ),
  //         data: { title: 'Blog Manager - Admin' },
  //       },
  //       {
  //         path: 'settings',
  //         loadComponent: () =>
  //           import('./features/admin/settings/admin-settings.component').then(
  //             (m) => m.AdminSettingsComponent,
  //           ),
  //         data: { title: 'Settings - Admin' },
  //       },
  //     ],
  //   },

  // Wildcard - 404
  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  //     data: { title: 'Page Not Found - Rising Stock of India' },
  //   },
];

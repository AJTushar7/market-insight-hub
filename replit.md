# Market Insight Hub

## Overview
An Angular 20 frontend application for "Rising Stock of India" - a market insight and investment services platform. Features include services, courses, blog, stock tools, contact forms, user dashboard, and admin panel.

## Project Architecture
- **Framework**: Angular 20 with standalone components
- **Styling**: SCSS with custom theme variables
- **Animations**: GSAP library
- **Build System**: Angular CLI with `@angular/build`
- **Language**: TypeScript 5.9

## Project Structure
- `src/app/features/` - Feature modules (home, auth, blog, courses, dashboard, admin, etc.)
- `src/app/layout/` - Layout components (header, footer, etc.)
- `src/app/shared/` - Shared services, guards, models
- `src/styles/` - Global SCSS variables, mixins, themes, animations
- `public/` - Static assets (favicon, logo)

## Running
- Dev server: `npx ng serve --configuration development` on port 5000
- Build: `npx ng build --configuration production`
- Output directory: `dist/market-insight-hub/browser`

## Recent Changes
- 2026-02-15: Initial import and Replit environment setup
  - Configured Angular dev server to use port 5000, host 0.0.0.0, allowedHosts: true
  - Disabled Angular CLI analytics
  - Set up static deployment configuration

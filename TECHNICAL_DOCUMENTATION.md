# Technical Documentation

This document provides detailed technical insights into the Roldan Studio website architecture, implementation patterns, and development decisions.

## 🏗 Architecture Overview

### Framework Choice: Astro
The project uses **Astro** as the primary framework due to:

- **Performance**: Zero JavaScript by default with partial hydration
- **Flexibility**: Support for multiple UI frameworks (though this project uses Astro components exclusively)
- **SEO**: Static generation with server-side rendering capabilities
- **Developer Experience**: TypeScript-first, component-based architecture

### Styling Strategy: Tailwind CSS
- **Utility-First**: Rapid prototyping with design system constraints
- **Custom Theme**: Extended Tailwind configuration with project-specific tokens
- **Performance**: PurgeCSS optimization for minimal CSS bundle
- **Responsive**: Mobile-first approach with custom breakpoints

## 🔧 Core Implementation Patterns

### Internationalization (i18n)

#### Architecture
```typescript
// File-based translations
src/locales/
├── en.json  // English
├── es.json  // Spanish
└── de.json  // German

// Auto-detection middleware
src/middleware.ts
```

#### Key Features
- **Browser Language Detection**: Automatic redirect based on `Accept-Language` header
- **SEO Optimization**: Language-specific meta tags and canonical URLs
- **URL Structure**: Clean, prefix-based routing (`/en/`, `/es/`, `/de/`)
- **Sitemap Integration**: Multi-language sitemap generation

### Component Architecture

#### Astro Components
- **Server-Side Rendering**: Components render to static HTML
- **Client-Side Interactivity**: Minimal JavaScript for animations and interactions
- **Props System**: Type-safe props with JSON translation files
- **Slot System**: Flexible content composition

#### Component Structure
```astro
---
// Server-side logic
import type { TranslationType } from '../types';
const { t } = Astro.props;
---

<!-- Template -->
<div class="component">
  {t.title}
</div>

<!-- Client-side scripts -->
<script>
  // Interactive functionality
</script>
```

### Animation System

#### Motion One Integration
- **Lightweight**: 4KB gzipped animation library
- **Performance**: Hardware-accelerated transforms
- **Declarative**: Simple API for complex animations

#### Scroll-Triggered Animations
```javascript
// Intersection Observer pattern
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animate(entry.target, {
        opacity: [0, 1],
        transform: ['translateY(24px)', 'translateY(0px)']
      });
    }
  });
});
```

### Performance Optimizations

#### Image Strategy
- **AVIF Format**: Modern image format with superior compression
- **Responsive Images**: Multiple sizes for different viewports
- **Lazy Loading**: Deferred loading for below-fold images

#### Font Optimization
- **WOFF2 Format**: Modern compression for web fonts
- **Font Display**: `swap` for non-blocking font loading
- **Preload**: Critical fonts preloaded for performance

#### CSS Strategy
- **Critical CSS**: Inline critical styles for above-fold content
- **Tailwind Purge**: Remove unused CSS in production
- **CSS-in-JS**: Component-scoped styles with minimal runtime

## 🎨 Design System Implementation

### Color System
```css
/* Semantic color tokens */
--color-black: #242b2f;
--color-white: #fafafa;
--color-gray-text: #d9d9d9;
--color-black-line: rgba(0, 0, 0, 0.4);

/* Component-specific colors */
--color-hover-nav: #76808f;
--color-black-hover: #313a40;
```

### Typography Scale
- **Primary Font**: Montserrat (weights: 400, 500, 600, 700)
- **Monospace**: JetBrains Mono for code elements
- **Logo Font**: Poppins for brand identity

### Spacing System
- **Base Unit**: 4px grid system
- **Responsive**: Mobile-first scaling
- **Component Utilities**: Predefined spacing classes

## 🔄 State Management

### Component-Level State
- **Props-Driven**: Data flows from parent to child components
- **URL State**: Navigation and section tracking via URL fragments
- **Local Storage**: User preferences (language, theme)

### Global State Patterns
- **CSS Custom Properties**: Theme and design tokens
- **URL Parameters**: Shareable state via query strings
- **Event System**: Custom events for cross-component communication

## 🧪 Testing Strategy

### End-to-End Testing
```typescript
// Playwright configuration
import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  // Test assertions
});
```

### Testing Coverage
- **Page Load**: Basic functionality and rendering
- **Navigation**: Internal and external links
- **Responsive**: Cross-device compatibility
- **Performance**: Core Web Vitals monitoring

## 🚀 Deployment Architecture

### Vercel Serverless
- **Edge Network**: Global CDN for static assets
- **Serverless Functions**: Dynamic routing and API endpoints
- **Automatic Optimization**: Image optimization, compression

### Build Process
```bash
# Development
pnpm dev        # Hot reload development server

# Production
pnpm build      # Static generation with optimization
pnpm preview    # Local production preview
```

### Environment Configuration
- **No Environment Variables**: Static site generation
- **Build-time Optimization**: All optimizations applied during build
- **Cache Strategy**: Aggressive caching for static assets

## 🔍 SEO Implementation

### Meta Tags
- **Dynamic Titles**: Language-specific page titles
- **Structured Descriptions**: SEO-optimized meta descriptions
- **Open Graph**: Social media sharing optimization

### Technical SEO
- **Sitemap**: Auto-generated with multi-language support
- **Canonical URLs**: Prevent duplicate content issues
- **Structured Data**: JSON-LD for rich snippets

## 📈 Performance Metrics

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Techniques
- **Code Splitting**: Astro islands for partial hydration
- **Asset Optimization**: Image compression and format selection
- **Font Strategy**: Critical font preloading
- **CSS Optimization**: Critical CSS inlining

## 🔮 Future Enhancements

### Technical Roadmap
- **Progressive Web App**: Service worker for offline functionality
- **Content Management**: Headless CMS integration
- **Analytics**: Privacy-focused analytics implementation
- **Performance Monitoring**: Real-user monitoring setup

### Feature Enhancements
- **Dark/Light Mode**: User preference switching
- **Search Functionality**: Client-side search implementation
- **Blog Integration**: Markdown-based content system
- **Contact Form**: Serverless function integration

---

This technical documentation provides a comprehensive overview of the architectural decisions and implementation patterns used in the Roldan Studio website. The project demonstrates modern web development practices with a focus on performance, accessibility, and maintainability.
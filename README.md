# Roldan Studio Website

[![Astro](https://img.shields.io/badge/Astro-5.13.7-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Technical Showcase**: A modern, high-performance portfolio website demonstrating advanced Astro implementation, internationalization, and modern web development practices.

A modern, high-performance portfolio website built with Astro, featuring internationalization, smooth animations, and a clean design system. This project showcases advanced web development techniques and serves as a technical demonstration of modern frontend architecture.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v5.13.7
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.13
- **Deployment**: [Vercel](https://vercel.com) (Serverless)
- **Animation**: [Motion One](https://motion.dev) v10.18.0
- **Icons**: [Lucide](https://lucide.dev) v0.544.0
- **Testing**: [Playwright](https://playwright.dev) v1.55.1
- **Package Manager**: [pnpm](https://pnpm.io)

## ✨ Key Features

### 🎯 Performance Optimizations
- **Static Site Generation** with Astro's hybrid rendering
- **Image Optimization** using Sharp for AVIF/WebP formats
- **CSS-in-JS** with Tailwind CSS for minimal bundle size
- **Motion One** for lightweight, performant animations
- **Font Optimization** with custom font loading strategy

### 🌍 Internationalization (i18n)
- **Multi-language Support**: English, Spanish, German
- **Auto-detection** via browser language headers
- **SEO-friendly** URL structure (`/en/`, `/es/`, `/de/`)
- **Sitemap Integration** with localized URLs
- **Language Toggle** component for user preference

### 🎨 Design System
- **Custom Color Palette** with semantic tokens
- **Typography System** using Montserrat and JetBrains Mono
- **Responsive Design** with mobile-first approach
- **Glass Morphism** effects and smooth transitions
- **Dark Mode** optimized color scheme

### ⚡ Advanced Animations
- **Intersection Observer** for scroll-triggered animations
- **Smooth Page Transitions** with Motion One
- **Hover Effects** with CSS transforms and filters
- **Logo Shimmer** animation with mask effects
- **Sticky Header** with dynamic color switching

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Contact.astro
│   ├── Hero.astro
│   ├── Header.astro
│   ├── Services.astro
│   └── ...
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Route definitions
│   ├── index.astro     # English homepage
│   ├── es/
│   │   └── index.astro # Spanish homepage
│   └── de/
│       └── index.astro # German homepage
├── locales/            # Translation files
│   ├── en.json
│   ├── es.json
│   └── de.json
├── styles/             # Global styles and Tailwind config
│   └── global.css
├── assets/             # Static assets
│   ├── images/
│   └── fonts/
├── utils/              # Utility functions
│   └── pair.ts
└── types/              # TypeScript definitions
    └── types.ts
```

## 🛠 Development

### Prerequisites
- Node.js 18+
- pnpm 8+

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd roldan-studio-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm test         # Run Playwright tests
pnpm show-report  # Show test reports
```

### Testing
```bash
# Run end-to-end tests
pnpm test

# Show test report
pnpm show-report
```

## 🔧 Configuration

### Astro Configuration
- **Site**: `https://jbroldan.dev`
- **i18n**: Multi-locale with prefix-based routing
- **Output**: Serverless (Vercel adapter)
- **Build**: Inline stylesheets for performance

### Tailwind CSS
- Custom theme with design tokens
- Responsive breakpoints
- Component-specific utilities
- Performance-optimized build

### Internationalization
- JSON-based translation files
- Auto-redirect based on browser language
- SEO-optimized meta tags per locale
- Language-specific sitemap entries

## 🎯 Technical Highlights

### Performance
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Minimal JavaScript with Astro islands
- **Image Optimization**: AVIF format with responsive sizing

### Accessibility
- **WCAG 2.1** compliant
- **Semantic HTML** structure
- **Keyboard Navigation** support
- **Screen Reader** optimized

### SEO
- **Structured Data** implementation
- **Meta Tags** per page and locale
- **Sitemap** generation
- **Open Graph** and Twitter Cards

## 🚀 Deployment

The project is configured for deployment on Vercel with serverless functions:

```bash
# Build and deploy
pnpm build
```

### Environment Variables
- No environment variables required for basic deployment
- Configured for Vercel's serverless platform

## 📈 Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please open an issue in the repository.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Astro, Tailwind CSS, and modern web technologies.**

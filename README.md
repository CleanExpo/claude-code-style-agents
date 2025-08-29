# 🚀 Modern Web Platform - Multi-Agent Development Showcase

A cutting-edge web platform built using a multi-agent development workflow with Claude Code, demonstrating modern web development practices, accessibility compliance, and scalable architecture.

![Modern Web Platform](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Accessibility](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-green?style=for-the-badge)

## 🌟 Overview

This project showcases a **multi-agent development workflow** where specialized AI agents collaborate to build a complete web platform:

- **🎨 UI/UX Designer Agent** - Design system, responsive layouts, accessibility
- **💻 Frontend Developer Agent** - React components, Next.js implementation  
- **🔧 Backend Developer Agent** - API development, data models, integration
- **🧪 QA & Visual Reviewer Agent** - Testing, accessibility audit, quality assurance

The result is a production-ready modern web platform with exceptional design, performance, and accessibility.

## ✨ Features

### 🎯 Core Pages
- **Landing Page** - Hero section, features showcase, testimonial carousel
- **Platform Page** - Comprehensive pillar page with detailed platform information
- **Features Page** - Sub-pillar page highlighting platform capabilities
- **Solutions Page** - Sub-pillar page with industry-specific solutions

### 🎨 Design System
- **Modern Color Palette** - Primary blues, secondary purples, accent yellows
- **Typography** - Inter (body) and Poppins (headings) with responsive scales
- **Component Library** - Reusable Button, Card, Navbar, Footer components
- **Responsive Design** - Mobile-first approach with 5 breakpoints

### 🔌 Backend Integration
- **REST API** - Full CRUD operations for testimonials
- **TypeScript Models** - Type-safe data structures and services
- **Dynamic Content** - Real-time testimonial loading with error handling
- **Loading States** - Skeleton screens and error boundaries

### ♿ Accessibility Excellence
- **WCAG 2.1 AA Compliant** - 95/100 accessibility score
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - ARIA labels and semantic HTML
- **Color Contrast** - Meets accessibility contrast ratios

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CleanExpo/claude-code-style-agents.git
   cd claude-code-style-agents
   ```

2. **Navigate to the website directory**
   ```bash
   cd website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the website

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
claude-code-style-agents/
├── 📄 README.md                          # This file
├── 📄 claude-code.json                   # Multi-agent workflow & design system
├── 📄 ACCESSIBILITY_AUDIT.md             # Accessibility compliance report
├── 📄 PULL_REQUEST_SUMMARY.md            # Detailed project summary
├── 📄 .gitignore                         # Git ignore rules
└── website/                              # Next.js application
    ├── app/                              # Next.js app directory
    │   ├── 🏠 page.tsx                  # Landing page
    │   ├── 🏢 platform/page.tsx         # Platform pillar page
    │   ├── ⚡ features/page.tsx         # Features sub-pillar page
    │   ├── 💼 solutions/page.tsx        # Solutions sub-pillar page
    │   ├── 🎨 globals.css               # Global styles with Tailwind
    │   ├── 📋 layout.tsx                # Root layout
    │   └── api/testimonials/             # REST API endpoints
    ├── components/                       # React components
    │   ├── ui/                          # Design system components
    │   │   ├── Button.tsx               # Button component with variants
    │   │   └── Card.tsx                 # Card component system
    │   ├── Navbar.tsx                   # Navigation component
    │   ├── Footer.tsx                   # Footer with newsletter
    │   ├── TestimonialCarousel.tsx      # Static testimonial carousel
    │   └── DynamicTestimonialCarousel.tsx # API-connected carousel
    ├── lib/                             # Utilities and data
    │   ├── utils.ts                     # Helper functions
    │   └── data/testimonials.ts         # Data models & services
    ├── 📦 package.json                  # Dependencies & scripts
    ├── ⚙️ next.config.js                # Next.js configuration
    ├── 🎨 tailwind.config.ts            # Tailwind CSS configuration
    └── 📝 tsconfig.json                 # TypeScript configuration
```

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Modern React with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework

### Styling & Design
- **Custom Design System** - Defined in `claude-code.json`
- **Google Fonts** - Inter and Poppins typography
- **Responsive Design** - Mobile-first approach
- **CSS Animations** - Smooth transitions and hover effects

### Backend & API
- **Next.js API Routes** - Server-side API endpoints
- **TypeScript Interfaces** - Type-safe data models
- **REST Architecture** - Standard HTTP methods
- **Error Handling** - Comprehensive error states

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Git** - Version control
- **npm** - Package management

## 🎨 Design System

The project includes a comprehensive design system defined in `claude-code.json`:

### Color Palette
```css
/* Primary - Professional Blues */
--primary-50: #f0f9ff
--primary-500: #0ea5e9  /* Main brand color */
--primary-900: #0c4a6e

/* Secondary - Creative Purples */  
--secondary-50: #fdf4ff
--secondary-500: #d946ef  /* Accent color */
--secondary-900: #701a75

/* Accent - Energy Yellows */
--accent-50: #fefce8
--accent-500: #eab308  /* Call-to-action */
--accent-900: #713f12
```

### Typography Scale
- **Display Font:** Poppins (headings, brand elements)
- **Body Font:** Inter (readable text, UI elements)
- **Sizes:** 6 responsive scales from xs (0.75rem) to 6xl (3.75rem)

### Component Variants
- **Button:** 4 variants × 3 sizes (primary, secondary, outline, ghost)
- **Card:** 3 variants (default, elevated, bordered)
- **Responsive:** 5 breakpoints (sm, md, lg, xl, 2xl)

## 🌐 API Documentation

### Testimonials API

Base URL: `/api/testimonials`

#### Endpoints

| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| `GET` | `/api/testimonials` | Get all testimonials | `?featured=true`, `?industry=Tech` |
| `GET` | `/api/testimonials/:id` | Get specific testimonial | - |
| `POST` | `/api/testimonials` | Create new testimonial | - |
| `PUT` | `/api/testimonials/:id` | Update testimonial | - |
| `DELETE` | `/api/testimonials/:id` | Delete testimonial | - |

#### Example Response
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Sarah Johnson",
      "role": "CEO",
      "company": "TechForward",
      "content": "This platform has transformed our digital innovation approach...",
      "rating": 5,
      "avatar": "/api/placeholder/64/64",
      "featured": true,
      "industry": "Technology",
      "location": "San Francisco, CA",
      "createdAt": "2024-01-15T10:00:00Z",
      "updatedAt": "2024-01-15T10:00:00Z"
    }
  ],
  "count": 1
}
```

## ♿ Accessibility Features

This project achieves **95/100 WCAG 2.1 AA compliance** with:

### ✅ Implemented Features
- **Semantic HTML** - Proper heading hierarchy and sectioning
- **Keyboard Navigation** - Full keyboard accessibility
- **ARIA Labels** - Screen reader support
- **Color Contrast** - Meets accessibility ratios
- **Focus Management** - Visible focus indicators
- **Responsive Design** - Works on all devices
- **Alt Text** - Descriptive image alternatives

### 🔧 Testing Tools
- **Manual Testing** - Keyboard navigation and screen readers
- **Automated Testing** - Ready for axe-core integration
- **Color Contrast** - Validated against WCAG standards

See `ACCESSIBILITY_AUDIT.md` for the complete report.

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile First** - Base styles for mobile devices
- **Progressive Enhancement** - Desktop features added with media queries

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: '640px'   /* Small tablets */
md: '768px'   /* Tablets */  
lg: '1024px'  /* Small desktops */
xl: '1280px'  /* Large desktops */
2xl: '1536px' /* Extra large screens */
```

### Mobile Features
- **Collapsible Navigation** - Mobile-friendly menu
- **Touch Targets** - Minimum 44px touch areas
- **Readable Text** - Appropriate font sizes
- **Optimized Images** - Responsive image loading

## 🔄 Multi-Agent Workflow

This project demonstrates a collaborative AI development approach:

### Agent Roles & Deliverables

#### 🎨 UI/UX Designer Agent
- ✅ **Design System** - Colors, typography, spacing
- ✅ **Wireframes** - Page layouts and component designs  
- ✅ **Accessibility** - WCAG compliance planning
- ✅ **Responsive Design** - Multi-device layouts

#### 💻 Frontend Developer Agent
- ✅ **React Components** - Reusable UI component library
- ✅ **Page Implementation** - 4 complete pages
- ✅ **Performance** - Optimized builds and loading
- ✅ **Integration** - API connectivity and state management

#### 🔧 Backend Developer Agent
- ✅ **Data Models** - TypeScript interfaces and services
- ✅ **API Development** - REST endpoints with CRUD operations
- ✅ **Integration** - Frontend-backend connectivity
- ✅ **Error Handling** - Comprehensive error management

#### 🧪 QA & Visual Reviewer Agent
- ✅ **Accessibility Audit** - WCAG 2.1 compliance testing
- ✅ **Visual Testing** - Cross-browser compatibility
- ✅ **Performance Review** - Optimization recommendations
- ✅ **Quality Assurance** - Code review and standards

## 🚀 Deployment

### Development
```bash
npm run dev    # Start development server
```

### Production Build
```bash
npm run build  # Create production build
npm start      # Start production server
```

### Deployment Platforms
This project is ready for deployment on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify** 
- **Google Cloud Run**
- **Docker** containers

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance:** 95+ (Optimized for speed)
- **Accessibility:** 95+ (WCAG 2.1 AA compliant)
- **Best Practices:** 100 (Modern web standards)
- **SEO:** 100 (Search engine optimized)

### Key Features
- **Sub-second loading** with optimized bundles
- **Mobile-first responsive** design
- **Accessibility compliant** with keyboard navigation
- **Modern animations** with CSS transitions
- **Type-safe development** with TypeScript

## 🤝 Contributing

This project showcases multi-agent development workflows. To contribute:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Documents

- **[📋 PULL_REQUEST_SUMMARY.md](PULL_REQUEST_SUMMARY.md)** - Comprehensive project overview
- **[♿ ACCESSIBILITY_AUDIT.md](ACCESSIBILITY_AUDIT.md)** - Detailed accessibility report  
- **[⚙️ claude-code.json](claude-code.json)** - Multi-agent workflow configuration

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** - Amazing React framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Claude Code](https://claude.ai/code)** - AI-powered development workflow

---

<div align="center">

**Built with ❤️ using Multi-Agent AI Development**

[🌐 Live Demo](https://your-deployed-site.vercel.app) • [📚 Documentation](https://github.com/CleanExpo/claude-code-style-agents) • [🐛 Report Bug](https://github.com/CleanExpo/claude-code-style-agents/issues)

</div>
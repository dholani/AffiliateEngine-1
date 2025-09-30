# Design Guidelines: Affiliate Service Platform

## Design Approach

**Selected Approach:** Design System + Service Platform Reference
- **System Foundation:** Material Design principles for information density and mobile-first approach
- **References:** UrbanClap/Urban Company, ServiceNow, and modern service aggregators
- **Rationale:** This platform needs to build trust while displaying dense information efficiently. Users need to quickly find services, understand offerings, and click affiliate links with confidence.

## Core Design Principles

1. **Trust-First Design:** Professional, clean aesthetics that inspire confidence in affiliate recommendations
2. **Scan-Optimized Layouts:** Information hierarchy that allows quick service discovery
3. **Conversion-Focused:** Clear CTAs and affiliate links that feel helpful, not pushy
4. **Mobile-First:** Most users will browse on mobile devices

## Color Palette

**Light Mode:**
- Primary: 220 85% 50% (Professional blue - trust and reliability)
- Primary Hover: 220 85% 45%
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 45%
- Border: 220 15% 90%

**Dark Mode:**
- Primary: 220 75% 55%
- Primary Hover: 220 75% 60%
- Background: 220 15% 10%
- Surface: 220 12% 14%
- Text Primary: 220 10% 95%
- Text Secondary: 220 10% 65%
- Border: 220 15% 25%

**Accent Colors:**
- Success (Active Services): 142 70% 45%
- Warning (Featured): 35 90% 55%
- Info: 200 80% 50%

## Typography

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Clean, professional, excellent readability
- Headings: 'Inter' 600-700 weight
- Body: 'Inter' 400-500 weight

**Scale:**
- Hero Heading: text-5xl md:text-6xl font-bold
- Section Heading: text-3xl md:text-4xl font-bold
- Card Title: text-xl font-semibold
- Body: text-base leading-relaxed
- Small/Meta: text-sm text-muted

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing (icons, badges): p-2, gap-2
- Component padding: p-4, p-6
- Section spacing: py-12, py-16, py-20
- Container gaps: gap-6, gap-8

**Grid System:**
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3-4 columns for service cards (lg:grid-cols-3, xl:grid-cols-4)

**Container Widths:**
- Max content width: max-w-7xl mx-auto
- Narrow content: max-w-4xl mx-auto
- Form containers: max-w-2xl

## Component Library

### Navigation
- **Top Nav:** Sticky header with logo, category dropdowns, search bar, and "Admin" link
- **Mobile Nav:** Hamburger menu with slide-in drawer
- **Search:** Prominent search bar with autocomplete suggestions
- **Breadcrumbs:** For category pages and service details

### Service Display Components
- **Category Cards:** Large, icon-based cards with service count and description
  - Rounded corners (rounded-xl)
  - Subtle shadow (shadow-md hover:shadow-lg)
  - Icon + Title + Service count + Arrow
- **Service Provider Cards:** 
  - Provider logo/icon
  - Service name and brief description
  - Rating/trust badges if available
  - Primary CTA button for affiliate link
  - "Learn More" secondary action
- **Featured Services Banner:** Horizontal scroll carousel on homepage
- **Comparison Tables:** For similar services within a category

### Forms
- **Input Fields:** Rounded (rounded-lg), prominent labels, helper text
- **Buttons:** 
  - Primary: Solid blue, rounded-lg, px-6 py-3
  - Secondary: Outline with transparent background
  - Ghost: Text-only for tertiary actions
- **Service Request Form:** Multi-step form with progress indicator
- **Contact/Feedback:** Simple, single-column layout with validation

### Content Blocks
- **Hero Section:** 
  - Clean, professional background (subtle gradient or pattern)
  - Clear headline: "Find Trusted Services, Earn Benefits"
  - Subheading explaining the platform value
  - Search bar or category quick links
  - NO large hero image (keeps it fast, professional)
  - Trust indicators: "500+ Services" "Verified Providers" badges
- **Category Grid:** 3-4 column grid of category cards with icons
- **How It Works:** 3-step process with icons and brief text
- **Featured Providers:** Carousel or grid of top affiliate services
- **Blog/SEO Content:** Card-based blog layout with featured image, title, excerpt, "Read More"

### Admin Panel Components
- **Sidebar Navigation:** Fixed sidebar with admin menu items
- **Data Tables:** Sortable, searchable tables for managing services
- **Forms:** Add/Edit service forms with image upload, affiliate link input
- **Dashboard Cards:** Stats display (total services, clicks, revenue estimates)

### Trust Elements
- **Provider Badges:** "Verified Partner" "Top Rated" "Trending"
- **User Reviews Section:** Star ratings and testimonials where applicable
- **Security Badges:** SSL, secure affiliate links indicators
- **Disclosure Notice:** Subtle, compliant affiliate disclosure on relevant pages

### Footer
- **Multi-Column Footer:**
  - Company info and social links
  - Quick links (Categories, About, Contact)
  - Legal (Terms, Disclaimer, Privacy)
  - Newsletter signup
  - Payment/Security badges

## Page-Specific Guidelines

### Homepage
- Hero with search and category quick links
- Category grid (8-12 main categories)
- Featured services carousel
- How It Works section
- Blog preview (3 latest posts)
- Trust signals and stats

### Category Pages
- Breadcrumb navigation
- Category header with description
- Filter sidebar (mobile: collapsible)
- Service provider grid (3-4 columns desktop)
- Pagination

### Service Detail Pages
- Provider header (logo, name, rating)
- Service description
- Key features/benefits
- Pricing info (if applicable)
- Primary CTA: "Visit [Provider]" affiliate button
- Related services

### Admin Panel
- Dashboard with metrics
- Service management table
- Add/Edit service forms
- User service request approval queue
- Simple, functional design - not consumer-facing

## Images

**Hero Section:** NO large hero image - use clean gradient or subtle pattern background to keep load times fast and professional appearance.

**Service Provider Logos:** Use actual provider logos in service cards (small, optimized)

**Category Icons:** Use icon library (Heroicons or Material Icons) for category representations

**Blog Posts:** Featured images for blog cards (16:9 ratio, lazy-loaded)

**Trust Badges:** Small badge/seal graphics for security, verification, etc.

## Animation Guidelines

**Minimal, Performance-Focused:**
- Hover states: Subtle scale (scale-105) or shadow transitions
- Button clicks: Quick opacity feedback
- NO complex scroll animations
- Page transitions: Simple fade-in for new content
- Loading states: Simple spinner, no elaborate animations

## Accessibility & Performance

- High contrast ratios for all text (WCAG AA minimum)
- Keyboard navigation for all interactive elements
- Lazy loading for images below fold
- Optimized SVGs for icons
- Fast first paint critical for SEO

This design creates a trustworthy, efficient affiliate platform that prioritizes user trust, quick navigation, and clear conversion paths while maintaining exceptional performance for SEO success.
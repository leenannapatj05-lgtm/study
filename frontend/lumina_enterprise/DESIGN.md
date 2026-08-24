---
name: Lumina Enterprise
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#414754'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005bc0'
  primary: '#005bbf'
  on-primary: '#ffffff'
  primary-container: '#1a73e8'
  on-primary-container: '#ffffff'
  inverse-primary: '#adc7ff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#006875'
  on-tertiary: '#ffffff'
  tertiary-container: '#008392'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#9cf0ff'
  tertiary-fixed-dim: '#00daf3'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Kanit
    fontSize: 57px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Kanit
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: 0px
  headline-lg-mobile:
    fontFamily: Kanit
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 0px
  title-lg:
    fontFamily: Kanit
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0px
  body-lg:
    fontFamily: Kanit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Kanit
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.25px
  label-lg:
    fontFamily: Kanit
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-sm:
    fontFamily: Kanit
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for high-stakes enterprise study management, where data density must coexist with cognitive clarity. The brand personality is **intelligent, authoritative, and visionary**, bridging the gap between traditional research rigor and modern AI-assisted workflows.

The visual style follows a **refined Material Design 3 (MD3) evolution**. It leverages a "Clean Enterprise" aesthetic—prioritizing white space, high-contrast structural elements, and subtle glassmorphism for AI-driven insights. While the core interface remains grounded and professional, vibrant gradients are used strategically as "signals" for AI presence, progress, and high-priority data points. The goal is an interface that feels fast, mathematically precise, and effortlessly accessible.

## Colors

This design system utilizes a high-contrast palette optimized for legibility and WCAG 2.1 AA compliance.

- **Primary:** The "Google Blue" (#1A73E8) serves as the main action color, used for primary buttons, active states, and critical wayfinding.
- **Secondary:** Pure White (#FFFFFF) defines the container surfaces in light mode, ensuring a sterile, professional environment for data.
- **Accent (AI Signal):** A vibrant transition from Blue to Cyan. This is reserved for AI-generated suggestions, automated data insights, and experimental features.
- **Surface Strategy:** In light mode, use a neutral-gray-50 for backgrounds to make white cards pop. In dark mode, utilize the MD3 "Surface Container" model using deep charcoals (#121212) rather than pure black to maintain soft depth.

## Typography

**Kanit** is selected for its modern, geometric construction that excels in both Thai and English scripts. Its high x-height and open counters ensure that dense study data remains readable at small sizes.

- **Headlines:** Use Medium (500) or SemiBold (600) weights. Keep tracking tight for display sizes.
- **Body Text:** Use Regular (400) weight. For data-heavy tables, `body-md` is the standard to maximize information density without sacrificing clarity.
- **Labels:** Use for form headers, table column headers, and small annotations. Always use the 500 weight to distinguish them from static body text.

## Layout & Spacing

The layout employs a **mobile-first fluid grid** that transitions into a structured 12-column system for desktop dashboards.

- **Rhythm:** An 8pt linear scale is used for general layout, with a 4pt sub-grid for fine-tuning components (like icon alignment within buttons).
- **Mobile:** 4-column grid with 16px margins. Cards are typically full-width.
- **Tablet:** 8-column grid with 24px margins. Introduction of side-panels.
- **Desktop:** 12-column grid. Maximum content width of 1440px to prevent excessive line lengths in data reports.
- **Data Tables:** Use a condensed vertical rhythm (8px padding) to allow researchers to view more rows of study data above the fold.

## Elevation & Depth

This design system uses **Tonal Layers** supplemented by **Low-contrast outlines** to define hierarchy, following MD3 principles.

- **Level 0 (Bottom):** Surface background. No shadow.
- **Level 1 (Cards):** 1px border (#E0E0E0) and a very soft 4px blur shadow with 5% opacity.
- **Level 2 (Hover/Menus):** 8px blur shadow, 10% opacity. 
- **AI-Enhanced Elements:** These bypass standard elevation rules by using a subtle back-glow (using the secondary accent color) to indicate "intelligence" or "active processing."
- **Glassmorphism:** Reserved specifically for global search overlays and AI chat-drawers, using a 12px backdrop blur to maintain context of the underlying data.

## Shapes

The shape language is **Rounded**, communicating a modern and accessible feel while maintaining professional structure.

- **Standard Components:** Buttons, Input fields, and Chips use a 0.5rem (8px) corner radius.
- **Large Containers:** Dashboard cards and Modals use 1rem (16px) to create a distinct visual "nest" for information.
- **System Indicators:** Status dots and notification badges remain fully circular (pill-shaped).

## Components

- **Buttons:** Primary buttons use the Solid Primary color with white text. Secondary buttons use an outline with Primary text. AI-action buttons use the vibrant gradient background.
- **Input Fields:** Outlined style (MD3). On focus, the border thickens to 2px and changes to Primary Blue. Validation errors must use both color (#D93025) and an icon for accessibility.
- **Data Tables:** Header cells use `label-lg` with a subtle gray background. Rows use a 1px bottom border. Zebra striping is optional but recommended for tables exceeding 10 columns.
- **Chips:** Used for "Study Status" (e.g., Active, Pending, Closed). Use low-saturation background tints of the status color with high-saturation text for readability.
- **Cards:** The primary vehicle for dashboard data. Must include a clear Title, optional Subtitle, and a defined "Action Area" at the bottom.
- **AI Insights Rail:** A specialized vertical component that houses automated study suggestions, using the secondary accent color as a left-border accent.
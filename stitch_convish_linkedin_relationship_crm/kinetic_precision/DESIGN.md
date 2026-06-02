---
name: Kinetic Precision
colors:
  surface: '#111827'
  surface-dim: '#0f131e'
  surface-bright: '#353945'
  surface-container-lowest: '#0a0e19'
  surface-container-low: '#171b27'
  surface-container: '#1b1f2b'
  surface-container-high: '#262a36'
  surface-container-highest: '#313441'
  on-surface: '#dfe2f2'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2f2'
  inverse-on-surface: '#2c303c'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#c0c6da'
  on-secondary: '#2a3040'
  secondary-container: '#414657'
  on-secondary-container: '#afb5c8'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#4d8eff'
  on-tertiary-container: '#00285d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dde2f7'
  secondary-fixed-dim: '#c0c6da'
  on-secondary-fixed: '#151b2a'
  on-secondary-fixed-variant: '#414657'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0f131e'
  on-background: '#dfe2f2'
  surface-variant: '#313441'
  surface-elevated: '#1E2433'
  border-subtle: '#1F2937'
  border-strong: '#374151'
  text-primary: '#F9FAFB'
  text-secondary: '#9CA3AF'
  text-muted: '#6B7280'
  stage-slate: '#64748B'
  stage-violet: '#8B5CF6'
  stage-amber: '#F59E0B'
  stage-red: '#EF4444'
  stage-green: '#10B981'
typography:
  headline-lg:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 21px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  micro:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
  mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  sidebar-width: 240px
  sidebar-collapsed: 60px
  nav-height: 64px
  gutter: 16px
  margin-desktop: 32px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system is engineered for the high-stakes environment of professional relationship management. It adopts a **Minimalist-Modern** aesthetic, heavily influenced by the high-density, utility-first interfaces of Linear and Attio. The brand personality is disciplined, elite, and remarkably fast. 

The visual narrative prioritizes clarity over decoration, using purposeful whitespace and a rigorous grid to manage complex CRM data. The emotional response is one of "command and control"—providing the user with a sense of calm efficiency amidst a high volume of networking activity. Every interaction is designed to feel instantaneous, reinforcing a tool that keeps pace with professional thought.

## Colors

The system employs a "Dark-First" philosophy, utilizing a deep navy-slate foundation (`#0B0F1A`) to reduce visual fatigue during long periods of CRM management. The primary accent is a vibrant Indigo (`#6366F1`), used sparingly to direct attention to primary actions and active states.

Hierarchy is established through **tonal stepping** rather than color variety. Surfaces move from the base background to a slightly lighter `#111827` for containers, and `#1E2433` for interactive or elevated elements. A specialized "Stage" palette provides immediate semantic recognition for the pipeline status of connections, ensuring that the health of a relationship is visible at a glance.

## Typography

Typography is used as a functional tool for data density. **DM Sans** provides a modern, geometric character for headings, ensuring the brand feels contemporary and "premium SaaS." **Inter** handles the heavy lifting for body copy and data entries, chosen for its exceptional legibility at small sizes and high-density layouts.

For technical metadata and timestamps, **JetBrains Mono** is utilized to provide a distinct visual anchor that separates "system data" from "human content." All labels (`label-sm`) should be treated with a slight tracking increase when used in all-caps scenarios to maintain readability.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid model**. A permanent vertical sidebar (240px) anchors the navigation, while the main content area utilizes a fluid grid to maximize the visibility of relationship tables and Kanban boards. 

Information density is maintained through a tight 4px baseline shift. On desktop, content is padded with a generous 32px margin to prevent the UI from feeling cramped despite the high data volume. As the screen scales down, the sidebar collapses to an icon-only state (60px) at 1279px, before transitioning to a hidden drawer with a bottom-bar navigation on mobile devices (under 768px).

## Elevation & Depth

This system utilizes **Tonal Layers** as the primary method of showing depth, minimizing the use of heavy drop shadows to keep the interface feeling "flat" and fast. 

1.  **Level 0 (Base):** `#0B0F1A` - The canvas.
2.  **Level 1 (Surface):** `#111827` - Cards, side panels, and main content containers. Use a subtle `1px` solid border (`#1F2937`) to define edges.
3.  **Level 2 (Elevated):** `#1E2433` - Hover states, tooltips, and active menu items.
4.  **Level 3 (Overlays):** Modals and dropdowns use Level 2 backgrounds but add a soft, diffused shadow (`0 4px 12px rgba(0,0,0,0.5)`) and a semi-transparent backdrop blur to separate from the content below.

## Shapes

The shape language is "Soft-Precision." While the system is highly structural, it avoids sharp 0px corners to remain approachable. 

- **Primary Components:** Buttons, inputs, and search bars use an 8px radius.
- **Structural Elements:** Main dashboard cards and panels use a more pronounced 12px radius.
- **Floating UI:** Modals and large dialogs use a 16px radius.
- **Avatars:** Strictly circular to contrast against the geometric grid.

## Components

### Buttons & Inputs
Buttons feature a subtle scale-down effect (0.97) on click to provide tactile feedback. The primary CTA uses the Indigo accent with white text, while secondary buttons use a Ghost style (border only) or the Surface-Elevated background. Inputs use a 1px border (`#1F2937`) that transitions to a stronger Indigo highlight on focus.

### Chips & Badges
Pipeline stages are represented by semi-transparent badges. The background should be a 15% opacity version of the stage color, with the text at 100% opacity for maximum legibility without overwhelming the UI.

### Data Tables
Tables are the heart of the CRM. Use a "Borderless-Row" style where only horizontal dividers are used. Rows feature a `#1E2433` background on hover. Column headers use `label-sm` in all-caps with `text-muted` coloring.

### Cards
Cards are used for individual contact snapshots. They should have no shadow in their default state, only a subtle border. On hover, the border color shifts to `border-strong` and a micro-elevation shadow is applied.

### Skeleton Loaders
To maintain the "fast" core principle, all data-heavy components must use shimmering skeleton loaders during fetching, ensuring the layout remains stable and the user perceives zero "dead time."
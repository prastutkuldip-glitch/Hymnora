# HYMNORA - Design System & Brand Identity

## Brand Overview

**Name:** HYMNORA  
**Tagline:** "Faith. Scripture. Worship."  
**Brand Personality:** Premium • Peaceful • Spiritual • Elegant • Modern • Trustworthy

---

## Visual Identity

### Brand Essence
Hymnora embodies the intersection of timeless faith and modern design. The visual language speaks of crystal clarity, spiritual purity, and divine peace—like looking through pristine glass toward heaven.

### Design Philosophy
- **Crystal Clarity:** Clean, transparent, pure
- **Sacred Minimalism:** Essential elements only
- **Peaceful Depth:** Layered but calm
- **Premium Quality:** Apple-level polish
- **Spiritual Atmosphere:** Reverent without being heavy

---

## Color Palette

### Primary Colors

```css
/* Pure White & Soft Whites */
--color-pure-white: #FFFFFF;
--color-soft-white: #FAFBFC;
--color-crystal-white: #F7F9FC;
--color-snow-white: #F5F8FA;

/* Light Greys */
--color-light-grey-50: #F8F9FA;
--color-light-grey-100: #F1F3F5;
--color-light-grey-200: #E9ECEF;
--color-light-grey-300: #DEE2E6;

/* Silver Greys */
--color-silver-100: #E8EAED;
--color-silver-200: #D1D5DB;
--color-silver-300: #B8BFC7;
--color-silver-400: #9CA3AF;

/* Frosted Greys */
--color-frosted-grey-100: #F0F1F3;
--color-frosted-grey-200: #E4E6E9;
--color-frosted-grey-300: #D6D9DD;
--color-frosted-grey-400: #C5C9CF;

/* Crystal Ice Blue - Primary Accent */
--color-ice-blue-50: #F0F7FF;
--color-ice-blue-100: #E6F2FF;
--color-ice-blue-200: #C7E2FF;
--color-ice-blue-300: #A3CFFF;
--color-ice-blue-400: #7AB8FF;
--color-ice-blue-500: #4A9FFF;  /* Primary accent */
--color-ice-blue-600: #2B7FE6;
--color-ice-blue-700: #1A5CB8;
--color-ice-blue-800: #0D3D8A;

/* Deep Blue - Important Text/Icons */
--color-deep-blue-600: #1E3A5F;
--color-deep-blue-700: #152D4A;
--color-deep-blue-800: #0C1E35;
--color-deep-blue-900: #061425;
```

### Semantic Colors

```css
/* Success - Soft Green */
--color-success-light: #D1FAE5;
--color-success: #34D399;
--color-success-dark: #059669;

/* Warning - Soft Amber */
--color-warning-light: #FEF3C7;
--color-warning: #FBBF24;
--color-warning-dark: #D97706;

/* Error - Soft Red */
--color-error-light: #FEE2E2;
--color-error: #F87171;
--color-error-dark: #DC2626;

/* Info - Ice Blue */
--color-info-light: #E6F2FF;
--color-info: #4A9FFF;
--color-info-dark: #2B7FE6;

/* Premium Gold - Subtle Accent */
--color-premium-light: #FEF9E7;
--color-premium: #F5D576;
--color-premium-dark: #D4AF37;
```

### Text Colors

```css
--color-text-primary: #0C1E35;        /* Deep blue for headings */
--color-text-secondary: #4B5563;      /* Grey for body text */
--color-text-tertiary: #9CA3AF;       /* Light grey for captions */
--color-text-disabled: #D1D5DB;       /* Disabled state */
--color-text-white: #FFFFFF;          /* White text on dark backgrounds */
--color-text-accent: #2B7FE6;         /* Ice blue for links/actions */
```

### Background Colors

```css
--color-bg-primary: #FFFFFF;          /* Main background */
--color-bg-secondary: #F7F9FC;        /* Secondary background */
--color-bg-tertiary: #F0F7FF;         /* Tertiary background with blue tint */
--color-bg-overlay: rgba(0, 0, 0, 0.5); /* Modal overlays */
```

### Glassmorphism Colors

```css
/* Glass Surfaces */
--color-glass-white: rgba(255, 255, 255, 0.85);
--color-glass-white-light: rgba(255, 255, 255, 0.60);
--color-glass-white-lighter: rgba(255, 255, 255, 0.40);
--color-glass-ice-blue: rgba(74, 159, 255, 0.08);
--color-glass-ice-blue-light: rgba(74, 159, 255, 0.05);

/* Glass Borders */
--color-glass-border: rgba(255, 255, 255, 0.30);
--color-glass-border-blue: rgba(74, 159, 255, 0.20);

/* Glass Shadows */
--shadow-glass-light: 0 8px 32px rgba(31, 38, 135, 0.08);
--shadow-glass-medium: 0 12px 48px rgba(31, 38, 135, 0.12);
--shadow-glass-heavy: 0 16px 64px rgba(31, 38, 135, 0.16);

/* Glow Effects */
--glow-ice-blue: 0 0 20px rgba(74, 159, 255, 0.25);
--glow-ice-blue-strong: 0 0 30px rgba(74, 159, 255, 0.40);
```

### Color Usage Rules

1. **Dominant Colors:** Pure White (60%), Soft White/Light Grey (30%), Ice Blue accent (10%)
2. **Never use:** Strong purple, bright red, neon colors, excessive gold, dark-heavy UI
3. **Ice Blue is for:** Selected states, important actions, premium badges, active tabs
4. **Deep Blue is for:** Primary headings, important text, navigation icons
5. **Grey is for:** Body text, secondary elements, subtle backgrounds

---

## Typography

### Font Families

```css
/* Primary Font - Sans-serif (UI) */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

/* Secondary Font - Serif (Bible Text, Premium Headers) */
--font-secondary: 'Lora', 'Georgia', 'Cambria', serif;

/* Monospace (Code, Verse Numbers) */
--font-mono: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
```

### Font Sizes

```css
/* Headings */
--font-size-h1: 32px;      /* Page titles */
--font-size-h2: 28px;      /* Section headers */
--font-size-h3: 24px;      /* Card headers */
--font-size-h4: 20px;      /* Sub-headers */
--font-size-h5: 18px;      /* Small headers */
--font-size-h6: 16px;      /* Tiny headers */

/* Body Text */
--font-size-body-xl: 18px;  /* Large body text */
--font-size-body-lg: 16px;  /* Default body text */
--font-size-body-md: 14px;  /* Secondary body text */
--font-size-body-sm: 12px;  /* Small text */
--font-size-body-xs: 10px;  /* Tiny text, labels */

/* Bible Reading Sizes */
--font-size-bible-xl: 22px;
--font-size-bible-lg: 18px;
--font-size-bible-md: 16px;
--font-size-bible-sm: 14px;
```

### Font Weights

```css
--font-weight-thin: 100;
--font-weight-extralight: 200;
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights

```css
--line-height-tight: 1.2;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
--line-height-loose: 2;
```

### Letter Spacing

```css
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
```

### Typography Styles

```css
/* Heading 1 - Page Title */
.text-h1 {
  font-family: var(--font-primary);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text-primary);
}

/* Heading 2 - Section Header */
.text-h2 {
  font-family: var(--font-primary);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text-primary);
}

/* Body - Default */
.text-body {
  font-family: var(--font-primary);
  font-size: var(--font-size-body-lg);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}

/* Bible Text */
.text-bible {
  font-family: var(--font-secondary);
  font-size: var(--font-size-bible-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
}

/* Caption */
.text-caption {
  font-family: var(--font-primary);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-text-tertiary);
}

/* Button Text */
.text-button {
  font-family: var(--font-primary);
  font-size: var(--font-size-body-md);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: none;
}
```

---

## Spacing System

### Spacing Scale

```css
--space-0: 0px;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-7: 28px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Component Spacing

```css
/* Card Padding */
--padding-card-sm: var(--space-4);
--padding-card-md: var(--space-6);
--padding-card-lg: var(--space-8);

/* Screen Padding */
--padding-screen-horizontal: var(--space-4);
--padding-screen-vertical: var(--space-4);

/* Section Gaps */
--gap-section: var(--space-6);
--gap-items: var(--space-4);
--gap-tight: var(--space-2);
```

---

## Border Radius

```css
/* Border Radius Scale */
--radius-none: 0px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-3xl: 32px;
--radius-full: 9999px;  /* Pills, circles */

/* Component Radius */
--radius-card: var(--radius-xl);
--radius-button: var(--radius-full);
--radius-input: var(--radius-lg);
--radius-modal: var(--radius-2xl);
--radius-sheet: var(--radius-2xl);
```

---

## Shadows & Elevation

### Shadow Layers

```css
/* Material Design inspired elevation */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.10);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.12);
--shadow-2xl: 0 16px 48px rgba(0, 0, 0, 0.14);

/* Glassmorphism Shadows */
--shadow-glass-light: 0 8px 32px rgba(74, 159, 255, 0.08);
--shadow-glass-medium: 0 12px 48px rgba(74, 159, 255, 0.12);
--shadow-glass-heavy: 0 16px 64px rgba(74, 159, 255, 0.16);

/* Inner Shadows */
--shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-inner-strong: inset 0 4px 8px rgba(0, 0, 0, 0.10);
```

### Elevation System

```
Level 0: Flat (no shadow)
Level 1: Cards, buttons (shadow-sm)
Level 2: Floating elements (shadow-md)
Level 3: Modals, dropdowns (shadow-lg)
Level 4: Overlays, dialogs (shadow-xl)
```

---

## Glassmorphism System

### Glass Card Styles

```css
/* Glass Card - Light */
.glass-card-light {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.30);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.08);
  border-radius: var(--radius-card);
}

/* Glass Card - Medium */
.glass-card-medium {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.12);
  border-radius: var(--radius-card);
}

/* Glass Card - Ice Blue Tint */
.glass-card-ice {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(240, 247, 255, 0.90) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(74, 159, 255, 0.20);
  box-shadow: 0 8px 32px rgba(74, 159, 255, 0.10);
  border-radius: var(--radius-card);
}

/* Glass Button */
.glass-button {
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.08);
  border-radius: var(--radius-button);
}

/* Glass Button - Active/Selected */
.glass-button-active {
  background: rgba(74, 159, 255, 0.15);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(74, 159, 255, 0.30);
  box-shadow: 0 0 20px rgba(74, 159, 255, 0.25);
  border-radius: var(--radius-button);
}
```

### 3D Glass Effects

```css
/* 3D Depth - Floating */
.glass-3d-float {
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-3d-float:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 64px rgba(31, 38, 135, 0.16);
}

/* 3D Depth - Pressed */
.glass-3d-pressed {
  transform: scale(0.98);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.06);
}

/* Glass Reflection */
.glass-reflection::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: inherit;
  pointer-events: none;
}
```

---

## Icon System

### Icon Sizes

```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 40px;
--icon-2xl: 48px;
--icon-3xl: 64px;
```

### Glassmorphism Icon Bubble

```css
/* 3D Glass Icon Container */
.icon-glass-bubble {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(240, 247, 255, 0.90) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.40);
  border-radius: 18px;
  box-shadow:
    0 8px 24px rgba(31, 38, 135, 0.10),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
  position: relative;
}

/* Glass bubble reflection */
.icon-glass-bubble::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  height: 40%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 14px;
  pointer-events: none;
}

/* Icon inside bubble */
.icon-glass-bubble svg {
  width: 28px;
  height: 28px;
  color: var(--color-ice-blue-600);
  position: relative;
  z-index: 1;
}
```

### Feature Icons (Main Navigation)

```
Home: 3D glass house icon
Bible: Open book with pages inside crystal sphere
Hymns: Musical note with staff lines in glass
AI: Glowing brain/sparkle symbol in crystal
Books: Stack of translucent books
Profile: Minimal user silhouette in glass bubble
```

### Action Icons

```
Bookmark: Ribbon icon
Favorite: Heart icon (outline/filled)
Highlight: Marker icon
Share: Share arrow icon
Play: Play triangle in glass circle
Pause: Pause bars in glass circle
Download: Download arrow with line
Settings: Gear icon
Search: Magnifying glass
Notification: Bell icon
Lock: Padlock (for premium features)
```

---

## Button System

### Button Variants

#### 1. Primary Button (Main Actions)

```css
.button-primary {
  background: linear-gradient(135deg, #4A9FFF 0%, #2B7FE6 100%);
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: var(--radius-button);
  border: none;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 16px rgba(74, 159, 255, 0.30);
  transition: all 0.3s ease;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(74, 159, 255, 0.40);
}

.button-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(74, 159, 255, 0.25);
}
```

#### 2. Glass Button (Secondary Actions)

```css
.button-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  color: var(--color-deep-blue-700);
  padding: 14px 28px;
  border-radius: var(--radius-button);
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.08);
  transition: all 0.3s ease;
}

.button-glass:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(31, 38, 135, 0.12);
}
```

#### 3. Outline Button (Tertiary Actions)

```css
.button-outline {
  background: transparent;
  color: var(--color-ice-blue-600);
  padding: 14px 28px;
  border-radius: var(--radius-button);
  border: 2px solid var(--color-ice-blue-400);
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.button-outline:hover {
  background: rgba(74, 159, 255, 0.08);
  border-color: var(--color-ice-blue-600);
}
```

#### 4. Text Button (Minimal Actions)

```css
.button-text {
  background: transparent;
  color: var(--color-ice-blue-600);
  padding: 8px 16px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
}

.button-text:hover {
  color: var(--color-ice-blue-700);
  background: rgba(74, 159, 255, 0.05);
  border-radius: 8px;
}
```

#### 5. Icon Button

```css
.button-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(31, 38, 135, 0.08);
  transition: all 0.3s ease;
}

.button-icon:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 20px rgba(31, 38, 135, 0.12);
}
```

#### 6. Premium Button (Upgrade CTA)

```css
.button-premium {
  background: linear-gradient(
    135deg,
    #F5D576 0%,
    #E8C84D 50%,
    #D4AF37 100%
  );
  color: #0C1E35;
  padding: 16px 32px;
  border-radius: var(--radius-button);
  border: none;
  font-weight: 700;
  font-size: 16px;
  box-shadow:
    0 4px 20px rgba(213, 175, 55, 0.35),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.button-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.5s ease;
}

.button-premium:hover::before {
  left: 100%;
}
```

### Button States

```css
/* Loading State */
.button-loading {
  opacity: 0.7;
  pointer-events: none;
  position: relative;
}

/* Disabled State */
.button-disabled {
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;
}
```

---

## Card System

### Base Card

```css
.card-base {
  background: var(--color-glass-white);
  backdrop-filter: blur(20px);
  border: 1px solid var(--color-glass-border);
  border-radius: var(--radius-card);
  padding: var(--padding-card-md);
  box-shadow: var(--shadow-glass-light);
}
```

### Feature Card (Home Dashboard)

```css
.card-feature {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.90) 0%,
    rgba(240, 247, 255, 0.85) 100%
  );
  backdrop-filter: blur(24px);
  border: 1px solid rgba(74, 159, 255, 0.15);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(74, 159, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.card-feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #4A9FFF, #7AB8FF);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(74, 159, 255, 0.14);
}

.card-feature:hover::before {
  opacity: 1;
}
```

### Hymn Card

```css
.card-hymn {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 24px rgba(31, 38, 135, 0.08);
  transition: all 0.3s ease;
}

.card-hymn:active {
  transform: scale(0.98);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.06);
}
```

### Book Card

```css
.card-book {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(31, 38, 135, 0.10);
  transition: all 0.3s ease;
}

.card-book-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-book-content {
  padding: 16px;
}
```

### Premium Lock Card

```css
.card-premium-lock {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(254, 249, 231, 0.90) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(245, 213, 118, 0.30);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.12);
  opacity: 0.92;
}

.card-premium-lock::after {
  content: '🔒';
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  opacity: 0.7;
}
```

---

## Input System

### Text Input

```css
.input-text {
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(12px);
  border: 1.5px solid var(--color-silver-300);
  border-radius: var(--radius-input);
  font-family: var(--font-primary);
  font-size: 16px;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(31, 38, 135, 0.04);
}

.input-text:focus {
  outline: none;
  border-color: var(--color-ice-blue-500);
  box-shadow: 0 0 0 4px rgba(74, 159, 255, 0.10);
  background: rgba(255, 255, 255, 0.98);
}

.input-text::placeholder {
  color: var(--color-text-tertiary);
}
```

### Search Input

```css
.input-search {
  width: 100%;
  padding: 12px 16px 12px 44px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: var(--radius-full);
  font-size: 15px;
  color: var(--color-text-primary);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.06);
  transition: all 0.3s ease;
  background-image: url('data:image/svg+xml...');  /* Search icon */
  background-repeat: no-repeat;
  background-position: 14px center;
  background-size: 20px 20px;
}

.input-search:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.98);
  border-color: var(--color-ice-blue-400);
  box-shadow: 0 8px 24px rgba(74, 159, 255, 0.10);
}
```

### Textarea

```css
.input-textarea {
  width: 100%;
  min-height: 120px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(12px);
  border: 1.5px solid var(--color-silver-300);
  border-radius: var(--radius-input);
  font-family: var(--font-primary);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-primary);
  resize: vertical;
  transition: all 0.3s ease;
}

.input-textarea:focus {
  outline: none;
  border-color: var(--color-ice-blue-500);
  box-shadow: 0 0 0 4px rgba(74, 159, 255, 0.10);
}
```

---

## Navigation System

### Bottom Navigation Bar

```css
.bottom-nav {
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.40);
  border-radius: 24px;
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.12);
  padding: 8px 12px;
  z-index: 1000;
}

.bottom-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.bottom-nav-item-icon {
  width: 28px;
  height: 28px;
  color: var(--color-silver-400);
  transition: all 0.3s ease;
}

.bottom-nav-item-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-tertiary);
  margin-top: 4px;
  transition: all 0.3s ease;
}

/* Active State */
.bottom-nav-item-active {
  background: rgba(74, 159, 255, 0.12);
}

.bottom-nav-item-active .bottom-nav-item-icon {
  color: var(--color-ice-blue-600);
  filter: drop-shadow(0 0 8px rgba(74, 159, 255, 0.5));
  transform: scale(1.1);
}

.bottom-nav-item-active .bottom-nav-item-label {
  color: var(--color-ice-blue-700);
  font-weight: 700;
}
```

---

## Modal & Sheet System

### Bottom Sheet

```css
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 85%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(247, 249, 252, 0.98) 100%
  );
  backdrop-filter: blur(32px);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 24px;
  box-shadow: 0 -8px 48px rgba(31, 38, 135, 0.16);
  z-index: 2000;
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.bottom-sheet-handle {
  width: 40px;
  height: 5px;
  background: var(--color-silver-300);
  border-radius: 3px;
  margin: 0 auto 20px;
}
```

### Modal Dialog

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 3000;
  animation: fadeIn 0.3s ease;
}

.modal-container {
  width: 100%;
  max-width: 420px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(247, 249, 252, 0.98) 100%
  );
  backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.50);
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 24px 64px rgba(31, 38, 135, 0.20);
  animation: scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## Animation System

### Transition Timings

```css
--transition-fast: 150ms;
--transition-normal: 300ms;
--transition-slow: 500ms;

--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Micro Interactions

```css
/* Press Animation */
.press-animation:active {
  transform: scale(0.96);
  transition: transform 100ms ease-out;
}

/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

/* Pulse Animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.pulse-animation {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Shimmer Loading */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer-loading {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}

/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

---

## Badge & Pill System

### Premium Badge

```css
.badge-premium {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: linear-gradient(135deg, #F5D576, #E8C84D);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 700;
  color: #0C1E35;
  box-shadow:
    0 4px 12px rgba(213, 175, 55, 0.30),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
}

.badge-premium::before {
  content: '👑';
  font-size: 14px;
}
```

### Status Badge

```css
.badge-status {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
}

.badge-status-active {
  background: rgba(52, 211, 153, 0.15);
  color: #059669;
  border: 1px solid rgba(52, 211, 153, 0.30);
}

.badge-status-trial {
  background: rgba(74, 159, 255, 0.15);
  color: #2B7FE6;
  border: 1px solid rgba(74, 159, 255, 0.30);
}

.badge-status-expired {
  background: rgba(248, 113, 113, 0.15);
  color: #DC2626;
  border: 1px solid rgba(248, 113, 113, 0.30);
}
```

### Category Pill

```css
.pill-category {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: var(--radius-full);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.pill-category:hover {
  background: rgba(74, 159, 255, 0.12);
  border-color: rgba(74, 159, 255, 0.30);
  color: var(--color-ice-blue-700);
}

.pill-category-active {
  background: rgba(74, 159, 255, 0.18);
  border: 1.5px solid rgba(74, 159, 255, 0.40);
  color: var(--color-ice-blue-700);
  box-shadow: 0 0 16px rgba(74, 159, 255, 0.20);
}
```

---

## Loading States

### Spinner

```css
.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(74, 159, 255, 0.20);
  border-top-color: var(--color-ice-blue-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Skeleton Loader

```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8) 25%,
    rgba(240, 247, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.8) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-xs: 320px;   /* Small phones */
--breakpoint-sm: 375px;   /* Standard phones */
--breakpoint-md: 414px;   /* Large phones */
--breakpoint-lg: 768px;   /* Tablets */
--breakpoint-xl: 1024px;  /* Desktop (Admin Panel) */
--breakpoint-2xl: 1280px; /* Large desktop */
```

---

## Component Library Structure

```
components/
├── atoms/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Icon.tsx
│   ├── Badge.tsx
│   ├── Avatar.tsx
│   └── Spinner.tsx
├── molecules/
│   ├── SearchBar.tsx
│   ├── IconButton.tsx
│   ├── PillGroup.tsx
│   ├── CardHeader.tsx
│   └── InputField.tsx
├── organisms/
│   ├── BottomNav.tsx
│   ├── BottomSheet.tsx
│   ├── Modal.tsx
│   ├── FeatureCard.tsx
│   ├── HymnCard.tsx
│   └── BookCard.tsx
├── templates/
│   ├── ScreenLayout.tsx
│   ├── DashboardLayout.tsx
│   └── AuthLayout.tsx
└── theme/
    ├── colors.ts
    ├── typography.ts
    ├── spacing.ts
    ├── shadows.ts
    └── animations.ts
```

---

## Design Principles

### 1. Crystal Clarity
- Use white and ice-blue as primary colors
- Maintain high contrast for text
- Keep glassmorphism subtle, not overdone
- Let content breathe with generous spacing

### 2. Spiritual Peace
- Avoid aggressive colors (red, orange)
- Use gentle animations (300-500ms)
- Maintain calm visual hierarchy
- Create depth without heaviness

### 3. Premium Quality
- Polish every detail
- Consistent spacing and alignment
- Smooth transitions (never instant)
- High-quality imagery and icons

### 4. Modern Elegance
- Large rounded corners (16-24px)
- Generous padding (20-32px for cards)
- Floating elements with soft shadows
- 3D depth through glassmorphism

### 5. Accessibility First
- Minimum touch target: 44x44px
- Text contrast ratio: 4.5:1 minimum
- Clear visual focus states
- Support for reduced motion

---

## Visual Examples

### Home Screen Background
```
Base: Pure white (#FFFFFF)
Gradient overlay: Linear gradient from #F7F9FC to #F0F7FF (very subtle)
Noise texture: 2% opacity white noise for depth
```

### Verse of the Day Card
```
Background: White glass (rgba(255, 255, 255, 0.88))
Border: Ice blue glass (rgba(74, 159, 255, 0.15))
Top accent: 3px ice blue gradient line
Shadow: Soft blue glow (0 8px 32px rgba(74, 159, 255, 0.10))
Icon: 3D glass bubble with bookmark icon
```

### Premium Feature Card (Locked)
```
Background: White-gold gradient
Border: Golden glass (rgba(245, 213, 118, 0.25))
Lock icon: 🔒 at top-right
Badge: "Premium" badge with crown icon
Blur: Slight blur on content behind lock
```

### Bottom Navigation (Active Tab)
```
Background: Ice blue tint (rgba(74, 159, 255, 0.12))
Icon color: Ice blue (#2B7FE6)
Glow: Soft blue glow around icon
Scale: 110% size
Label: Bold ice blue text
```

---

This design system provides the complete visual foundation for HYMNORA, ensuring a consistent, premium, and peaceful Christian aesthetic throughout the application.

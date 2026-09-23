# HYMNORA Design System v2.0
## Premium Blue, Black & White with 3D Glassmorphism

---

## 🎨 **Design Philosophy**

**HYMNORA v2** embraces a premium, sophisticated aesthetic with:
- **Blue (30%)**: Trust, spirituality, premium quality
- **White (60%)**: Purity, clarity, peace
- **Black (10%)**: Sophistication, elegance, depth
- **3D Glassmorphism**: Multi-layer depth, frosted glass effects, elevation
- **Multi-Language**: English, Hindi (हिंदी), Assamese (অসমীয়া)

---

## 🎨 **Color System**

### **Primary Blues (30% Usage)**

```typescript
// Vibrant Blues
primaryBlue: '#0066FF'      // Main brand color
royalBlue: '#0052CC'        // Deep royal
electricBlue: '#0080FF'     // Bright electric
skyBlue: '#3399FF'          // Light sky

// Deep Blues
deepBlue: '#003D99'         // Dark depth
navyBlue: '#002966'         // Navy dark
midnightBlue: '#001A4D'     // Midnight

// Light Blues
lightBlue: '#66B3FF'        // Soft light
paleBlue: '#99CCFF'         // Pale accent
babyBlue: '#CCE6FF'         // Very light
```

**Usage:**
- Primary buttons, CTAs
- Active navigation states
- Links and interactive elements
- Brand highlights
- Premium feature badges

---

### **Whites (60% Usage - Dominant)**

```typescript
pureWhite: '#FFFFFF'        // Pure white
softWhite: '#FAFCFF'        // Soft tint
crystalWhite: '#F7F9FC'     // Crystal clear
snowWhite: '#FCFDFF'        // Snow white
iceWhite: '#F0F4F8'         // Ice tint
```

**Usage:**
- Main backgrounds
- Card surfaces
- Text on dark backgrounds
- Glass layer highlights
- Clean, spacious layouts

---

### **Blacks & Charcoals (10% Usage - Accents)**

```typescript
pureBlack: '#000000'        // Pure black
softBlack: '#0A0A0A'        // Soft black
charcoal: '#1A1A1A'         // Charcoal
deepCharcoal: '#0C1E35'     // Deep charcoal
slateBlack: '#151515'       // Slate
graphite: '#262626'         // Graphite
```

**Usage:**
- Primary text
- Headers and titles
- Dark mode backgrounds
- Shadows and depth
- Premium contrast elements

---

### **Text Hierarchy**

```typescript
textPrimary: '#000000'      // Pure black - Headers
textSecondary: '#1A1A1A'    // Soft black - Body
textTertiary: '#4B5563'     // Gray - Secondary
textMuted: '#6B7280'        // Muted - Hints
textOnBlue: '#FFFFFF'       // White on blue
textBlue: '#0066FF'         // Blue text - Links
```

---

## 💎 **3D Glassmorphism System**

### **White Glass Layers**

```typescript
// Multiple depth layers
glass3DWhiteHeavy: 'rgba(255, 255, 255, 0.95)'    // Top layer
glass3DWhiteMedium: 'rgba(255, 255, 255, 0.85)'   // Mid layer
glass3DWhiteLight: 'rgba(255, 255, 255, 0.75)'    // Light layer
glass3DWhiteSoft: 'rgba(255, 255, 255, 0.65)'     // Soft layer
glass3DWhiteSubtle: 'rgba(255, 255, 255, 0.50)'   // Subtle layer
```

### **Blue Glass Layers**

```typescript
// Accent glass effects
glass3DBlueHeavy: 'rgba(0, 102, 255, 0.18)'
glass3DBlueMedium: 'rgba(0, 102, 255, 0.12)'
glass3DBlueLight: 'rgba(0, 102, 255, 0.08)'
glass3DBlueSoft: 'rgba(51, 153, 255, 0.10)'
glass3DBlueSubtle: 'rgba(102, 179, 255, 0.08)'
```

### **Black Glass Overlays**

```typescript
// Dark overlays for modals/sheets
glass3DBlackHeavy: 'rgba(0, 0, 0, 0.85)'
glass3DBlackMedium: 'rgba(0, 0, 0, 0.60)'
glass3DBlackLight: 'rgba(0, 0, 0, 0.40)'
glass3DBlackSubtle: 'rgba(0, 0, 0, 0.20)'
```

---

## 🔲 **3D Borders & Depth**

### **Border Colors**

```typescript
// White borders (light cards)
border3DWhiteStrong: 'rgba(255, 255, 255, 0.6)'
border3DWhiteMedium: 'rgba(255, 255, 255, 0.4)'
border3DWhiteLight: 'rgba(255, 255, 255, 0.2)'

// Blue borders (accent cards)
border3DBlueStrong: 'rgba(0, 102, 255, 0.35)'
border3DBlueMedium: 'rgba(0, 102, 255, 0.25)'
border3DBlueLight: 'rgba(0, 102, 255, 0.15)'

// Black borders (dark elements)
border3DBlackStrong: 'rgba(0, 0, 0, 0.15)'
border3DBlackMedium: 'rgba(0, 0, 0, 0.10)'
border3DBlackLight: 'rgba(0, 0, 0, 0.05)'
```

### **Inner Glow (3D Depth)**

```typescript
innerGlowWhite: 'rgba(255, 255, 255, 0.8)'
innerGlowBlue: 'rgba(0, 102, 255, 0.3)'
```

---

## 🌑 **3D Shadow System**

### **Blue Shadows (Light elements)**

```typescript
shadow3DBlueLight: 'rgba(0, 102, 255, 0.04)'
shadow3DBlueMedium: 'rgba(0, 102, 255, 0.08)'
shadow3DBlueHeavy: 'rgba(0, 102, 255, 0.16)'
shadow3DBlueDeep: 'rgba(0, 102, 255, 0.24)'
```

**CSS Implementation:**
```css
.glass-card-light {
  box-shadow: 
    0 4px 16px rgba(0, 102, 255, 0.04),
    0 8px 32px rgba(0, 102, 255, 0.08);
}
```

### **Black Shadows (Dark elements)**

```typescript
shadow3DBlackLight: 'rgba(0, 0, 0, 0.06)'
shadow3DBlackMedium: 'rgba(0, 0, 0, 0.12)'
shadow3DBlackHeavy: 'rgba(0, 0, 0, 0.20)'
shadow3DBlackDeep: 'rgba(0, 0, 0, 0.32)'
```

---

## 🎨 **Gradient System**

### **Blue Gradients**

```typescript
// 2D Gradients
blueGradient2D: ['#0066FF', '#0052CC']

// 3D Gradients (multi-layer)
blueGradient3D: ['#3399FF', '#0066FF', '#0052CC']
blueGradient3DDeep: ['#0080FF', '#0066FF', '#003D99']

// Radial
blueGradientRadial: ['#0066FF', '#002966']
```

### **White Gradients**

```typescript
whiteGradient2D: ['#FFFFFF', '#F7F9FC']
whiteGradient3D: ['#FFFFFF', '#FAFCFF', '#F0F4F8']
whiteGradientSoft: ['#FCFDFF', '#F7F9FC']
```

### **Black Gradients**

```typescript
blackGradient2D: ['#1A1A1A', '#000000']
blackGradient3D: ['#262626', '#1A1A1A', '#000000']
```

### **Mixed Gradients**

```typescript
blueWhiteGradient: ['#0066FF', '#FFFFFF']
whiteBlueGradient: ['#FFFFFF', '#CCE6FF']
```

---

## ✨ **Premium Gold (Subscription)**

```typescript
premiumGold: '#FFD700'
premiumGoldLight: '#FFE44D'
premiumGoldDark: '#FFC107'
premiumGradient: ['#FFD700', '#FFC107', '#FFB300']
```

**Usage:**
- Premium badges
- Crown icons
- Subscription CTAs
- Unlock indicators

---

## 🔤 **Typography**

### **Font Families**

```typescript
// Primary: Inter (Sans-serif)
fontPrimary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'

// Secondary: Lora (Serif - for Bible text)
fontSecondary: 'Lora, Georgia, serif'

// Mono: Roboto Mono (Code/Numbers)
fontMono: 'Roboto Mono, Consolas, monospace'
```

### **Font Sizes**

```typescript
// Headers
fontSize: {
  h1: 32,    // Screen titles
  h2: 28,    // Section headers
  h3: 24,    // Card titles
  h4: 20,    // Sub-headers
  h5: 18,    // Small headers
  h6: 16,    // Tiny headers
  
  // Body
  xlarge: 18,
  large: 16,
  body: 15,
  small: 14,
  tiny: 13,
  micro: 12,
  nano: 11,
}
```

### **Font Weights**

```typescript
fontWeight: {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
}
```

### **Line Heights**

```typescript
lineHeight: {
  tight: 1.2,     // Headers
  normal: 1.5,    // Body text
  relaxed: 1.6,   // Bible verses
  loose: 1.8,     // Reading mode
}
```

---

## 📐 **Spacing System**

```typescript
spacing: {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
  massive: 64,
}
```

---

## 🔘 **Border Radius**

```typescript
borderRadius: {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  round: 50,     // Circular
  pill: 999,     // Full pill shape
}
```

---

## 🎯 **Component Styles**

### **Glass Card (3D)**

```typescript
const GlassCard3D = {
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(20px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  borderRadius: 20,
  boxShadow: `
    0 4px 16px rgba(0, 102, 255, 0.06),
    0 8px 32px rgba(0, 102, 255, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.8)
  `,
}
```

### **3D Button - Primary**

```typescript
const Button3DPrimary = {
  background: 'linear-gradient(135deg, #0066FF, #0052CC)',
  color: '#FFFFFF',
  borderRadius: 16,
  padding: '14px 32px',
  fontSize: 16,
  fontWeight: '600',
  boxShadow: `
    0 4px 16px rgba(0, 102, 255, 0.3),
    0 8px 24px rgba(0, 102, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3)
  `,
  // Pressed state
  transform: 'translateY(2px) scale(0.98)',
}
```

### **Bottom Navigation (3D Floating)**

```typescript
const BottomNav3D = {
  background: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(30px) saturate(180%)',
  borderTop: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '30px 30px 0 0',
  boxShadow: `
    0 -8px 32px rgba(0, 102, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8)
  `,
  height: 85,
}
```

---

## 🎨 **3D Icon System**

### **Icon Sizes**

```typescript
iconSize: {
  tiny: 16,
  small: 20,
  base: 24,
  medium: 32,
  large: 40,
  xlarge: 48,
  huge: 64,
}
```

### **Icon Components**

All icons use SVG with:
- **3D depth**: Multi-layer shadows
- **Glassmorphism**: Frosted glass effects
- **Gradients**: Blue-to-royal blue blends
- **Highlights**: White inner glow for 3D effect

**Available Icons:**
- Navigation: Home, Bible, Hymns, AI, Books, Profile
- Features: Audio, Search, Bookmark, Heart, Share, Star
- Actions: Play, Pause, Download, Settings, Notification
- Symbols: Cross, Crown, Check, Plus, Verse, Chapter

---

## 🌐 **Multi-Language Support**

### **Supported Languages**

1. **English** 🇬🇧 - Primary
2. **Hindi (हिंदी)** 🇮🇳 - Full UI + Bible
3. **Assamese (অসমীয়া)** 🇮🇳 - Full UI + Bible

### **Font Recommendations**

```typescript
fonts: {
  english: 'Inter, -apple-system',
  hindi: 'Noto Sans Devanagari, Inter',
  assamese: 'Noto Sans Bengali, Inter',
}
```

### **Right-to-Left (RTL) Support**

All layouts support LTR (Left-to-Right) for English, Hindi, and Assamese.

---

## 📱 **Screen Breakpoints**

```typescript
breakpoints: {
  mobile: 0,         // 0-767px
  tablet: 768,       // 768-1023px
  desktop: 1024,     // 1024-1439px
  wide: 1440,        // 1440px+
}
```

---

## ✨ **Animation System**

### **Timing Functions**

```typescript
easing: {
  default: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
}
```

### **Durations**

```typescript
duration: {
  instant: 100,      // Instant feedback
  fast: 200,         // Quick transitions
  normal: 300,       // Standard
  slow: 500,         // Deliberate
  verySlow: 800,     // Emphasis
}
```

### **Common Animations**

```typescript
// Fade In
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

// Scale Bounce
@keyframes scaleBounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

// Glass Shimmer
@keyframes glassShimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 🎯 **Accessibility**

### **Minimum Touch Targets**

- Buttons: 44x44px minimum
- Icons: 24x24px with 44x44px touch area
- List items: 48px minimum height

### **Color Contrast**

- Text on white: 4.5:1 minimum (WCAG AA)
- Blue text on white: 3:1 minimum
- White text on blue: 4.5:1 minimum

### **Focus States**

```typescript
focus: {
  outline: '2px solid #0066FF',
  outlineOffset: 2,
  borderRadius: 8,
}
```

---

## 📊 **Design Tokens Summary**

```json
{
  "colors": {
    "blue": "30% usage - Primary brand",
    "white": "60% usage - Dominant background",
    "black": "10% usage - Accent & text"
  },
  "glassmorphism": {
    "layers": "5 levels of depth",
    "blur": "20px backdrop filter",
    "opacity": "50% to 95%"
  },
  "shadows": {
    "types": "Blue tint & Black tint",
    "layers": "Multi-layer 3D depth"
  },
  "typography": {
    "primary": "Inter (UI)",
    "secondary": "Lora (Bible)",
    "sizes": "12 levels (11px - 32px)"
  },
  "spacing": {
    "scale": "4px base unit",
    "range": "4px to 64px"
  },
  "icons": {
    "style": "3D glassmorphism SVG",
    "count": "20+ premium icons"
  },
  "languages": {
    "supported": 3,
    "scripts": "Latin, Devanagari, Bengali"
  }
}
```

---

## 🚀 **Implementation Guidelines**

### **Do's ✅**

1. Use **blue** for primary actions and brand elements
2. Keep **white** as dominant (60%) for clean layouts
3. Apply **3D glassmorphism** to all cards and overlays
4. Use **multi-layer shadows** for depth
5. Implement **smooth animations** (300ms standard)
6. Support **all 3 languages** in every screen
7. Test on **light backgrounds** primarily

### **Don'ts ❌**

1. Don't use flat, non-glass cards
2. Don't overuse black (max 10%)
3. Don't skip shadow layers
4. Don't use single-color gradients
5. Don't ignore multi-language typography
6. Don't create elements smaller than 44x44px touch target

---

## 📦 **Component Library**

### **Core Components**

- `GlassCard3D` - Multi-layer glass card
- `Button3D` - 5 variants (primary, glass, outline, text, premium)
- `Icon3D` - 20+ premium 3D icons
- `BottomNav3D` - Floating glassmorphism navigation
- `SearchBar3D` - Frosted glass search
- `Avatar3D` - User profile with glass border

---

**HYMNORA Design System v2.0** - Premium Blue, Black & White with 3D Glassmorphism
Made with ❤️ and faith to glorify God

// HYMNORA Design System - Premium Blue, Black & White with 3D Glassmorphism

export const colors = {
  // === PRIMARY WHITES (60% Usage) ===
  pureWhite: '#FFFFFF',
  softWhite: '#FAFCFF',
  crystalWhite: '#F7F9FC',
  snowWhite: '#FCFDFF',
  iceWhite: '#F0F4F8',
  
  // === PREMIUM BLUES (30% Usage) ===
  // Primary Blues
  primaryBlue: '#0066FF',        // Main brand blue
  royalBlue: '#0052CC',          // Deep royal
  electricBlue: '#0080FF',       // Bright electric
  skyBlue: '#3399FF',            // Light sky
  
  // Deep Blues
  deepBlue: '#003D99',           // Dark deep
  navyBlue: '#002966',           // Navy dark
  midnightBlue: '#001A4D',       // Midnight
  
  // Light Blues  
  lightBlue: '#66B3FF',          // Soft light
  paleBlue: '#99CCFF',           // Pale accent
  babyBlue: '#CCE6FF',           // Very light
  
  // === BLACKS & CHARCOALS (10% Usage) ===
  pureBlack: '#000000',
  softBlack: '#0A0A0A',
  charcoal: '#1A1A1A',
  deepCharcoal: '#0C1E35',
  slateBlack: '#151515',
  graphite: '#262626',
  
  // === TEXT HIERARCHY ===
  textPrimary: '#000000',              // Pure black
  textSecondary: '#1A1A1A',            // Soft black
  textTertiary: '#4B5563',             // Gray
  textMuted: '#6B7280',                // Muted
  textOnBlue: '#FFFFFF',               // White on blue
  textOnDark: '#FFFFFF',               // White on dark
  textBlue: '#0066FF',                 // Blue text
  
  // === 3D GLASSMORPHISM LAYERS ===
  // White Glass (Light Layers)
  glass3DWhiteHeavy: 'rgba(255, 255, 255, 0.95)',
  glass3DWhiteMedium: 'rgba(255, 255, 255, 0.85)',
  glass3DWhiteLight: 'rgba(255, 255, 255, 0.75)',
  glass3DWhiteSoft: 'rgba(255, 255, 255, 0.65)',
  glass3DWhiteSubtle: 'rgba(255, 255, 255, 0.50)',
  
  // Blue Glass (Accent Layers)
  glass3DBlueHeavy: 'rgba(0, 102, 255, 0.18)',
  glass3DBlueMedium: 'rgba(0, 102, 255, 0.12)',
  glass3DBlueLight: 'rgba(0, 102, 255, 0.08)',
  glass3DBlueSoft: 'rgba(51, 153, 255, 0.10)',
  glass3DBlueSubtle: 'rgba(102, 179, 255, 0.08)',
  
  // Black Glass (Dark Overlays)
  glass3DBlackHeavy: 'rgba(0, 0, 0, 0.85)',
  glass3DBlackMedium: 'rgba(0, 0, 0, 0.60)',
  glass3DBlackLight: 'rgba(0, 0, 0, 0.40)',
  glass3DBlackSubtle: 'rgba(0, 0, 0, 0.20)',
  
  // === 3D BORDERS (Depth & Elevation) ===
  border3DWhiteStrong: 'rgba(255, 255, 255, 0.6)',
  border3DWhiteMedium: 'rgba(255, 255, 255, 0.4)',
  border3DWhiteLight: 'rgba(255, 255, 255, 0.2)',
  
  border3DBlueStrong: 'rgba(0, 102, 255, 0.35)',
  border3DBlueMedium: 'rgba(0, 102, 255, 0.25)',
  border3DBlueLight: 'rgba(0, 102, 255, 0.15)',
  
  border3DBlackStrong: 'rgba(0, 0, 0, 0.15)',
  border3DBlackMedium: 'rgba(0, 0, 0, 0.10)',
  border3DBlackLight: 'rgba(0, 0, 0, 0.05)',
  
  // Inner Glow (3D Depth)
  innerGlowWhite: 'rgba(255, 255, 255, 0.8)',
  innerGlowBlue: 'rgba(0, 102, 255, 0.3)',
  
  // === 3D SHADOWS (Multi-layer Depth) ===
  // Light Shadows (Blue tint)
  shadow3DBlueLight: 'rgba(0, 102, 255, 0.04)',
  shadow3DBlueMedium: 'rgba(0, 102, 255, 0.08)',
  shadow3DBlueHeavy: 'rgba(0, 102, 255, 0.16)',
  shadow3DBlueDeep: 'rgba(0, 102, 255, 0.24)',
  
  // Dark Shadows (Black tint)
  shadow3DBlackLight: 'rgba(0, 0, 0, 0.06)',
  shadow3DBlackMedium: 'rgba(0, 0, 0, 0.12)',
  shadow3DBlackHeavy: 'rgba(0, 0, 0, 0.20)',
  shadow3DBlackDeep: 'rgba(0, 0, 0, 0.32)',
  
  // === GRADIENTS (3D Depth) ===
  // Blue Gradients
  blueGradient2D: ['#0066FF', '#0052CC'],
  blueGradient3D: ['#3399FF', '#0066FF', '#0052CC'],
  blueGradient3DDeep: ['#0080FF', '#0066FF', '#003D99'],
  blueGradientRadial: ['#0066FF', '#002966'],
  
  // White Gradients
  whiteGradient2D: ['#FFFFFF', '#F7F9FC'],
  whiteGradient3D: ['#FFFFFF', '#FAFCFF', '#F0F4F8'],
  whiteGradientSoft: ['#FCFDFF', '#F7F9FC'],
  
  // Black Gradients
  blackGradient2D: ['#1A1A1A', '#000000'],
  blackGradient3D: ['#262626', '#1A1A1A', '#000000'],
  
  // Mixed Gradients (Blue to White)
  blueWhiteGradient: ['#0066FF', '#FFFFFF'],
  whiteBlueGradient: ['#FFFFFF', '#CCE6FF'],
  
  // === SEMANTIC COLORS ===
  // Success (Green)
  success: '#00C853',
  successLight: '#B9F6CA',
  successDark: '#00984A',
  
  // Warning (Amber)
  warning: '#FFB300',
  warningLight: '#FFECB3',
  warningDark: '#FF8F00',
  
  // Error (Red)
  error: '#D32F2F',
  errorLight: '#FFCDD2',
  errorDark: '#B71C1C',
  
  // Info (Blue)
  info: '#0066FF',
  infoLight: '#BBDEFB',
  infoDark: '#0052CC',
  
  // === PREMIUM GOLD (Subscription) ===
  premiumGold: '#FFD700',
  premiumGoldLight: '#FFE44D',
  premiumGoldDark: '#FFC107',
  premiumGradient: ['#FFD700', '#FFC107', '#FFB300'],
  
  // === BACKGROUNDS ===
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F7F9FC',
  backgroundTertiary: '#F0F4F8',
  backgroundBlue: '#E3F2FD',
  backgroundBlueLight: '#F0F7FF',
  backgroundDark: '#0A0A0A',
  backgroundBlack: '#000000',
  
  // === OVERLAYS ===
  overlayDark: 'rgba(0, 0, 0, 0.70)',
  overlayMedium: 'rgba(0, 0, 0, 0.50)',
  overlayLight: 'rgba(0, 0, 0, 0.30)',
  overlayWhite: 'rgba(255, 255, 255, 0.85)',
  overlayBlue: 'rgba(0, 102, 255, 0.20)',
};

export type ColorKey = keyof typeof colors;

// HYMNORA Color System - Crystal White & Ice Blue Theme

export const colors = {
  // Pure Whites
  pureWhite: '#FFFFFF',
  softWhite: '#FAFBFC',
  crystalWhite: '#F7F9FC',
  snowWhite: '#F5F8FA',

  // Light Greys
  lightGrey50: '#F8F9FA',
  lightGrey100: '#F1F3F5',
  lightGrey200: '#E9ECEF',
  lightGrey300: '#DEE2E6',

  // Silver Greys
  silver100: '#E8EAED',
  silver200: '#D1D5DB',
  silver300: '#B8BFC7',
  silver400: '#9CA3AF',

  // Frosted Greys
  frostedGrey100: '#F0F1F3',
  frostedGrey200: '#E4E6E9',
  frostedGrey300: '#D6D9DD',
  frostedGrey400: '#C5C9CF',

  // Crystal Ice Blue - Primary Accent
  iceBlue50: '#F0F7FF',
  iceBlue100: '#E6F2FF',
  iceBlue200: '#C7E2FF',
  iceBlue300: '#A3CFFF',
  iceBlue400: '#7AB8FF',
  iceBlue500: '#4A9FFF', // Primary
  iceBlue600: '#2B7FE6',
  iceBlue700: '#1A5CB8',
  iceBlue800: '#0D3D8A',

  // Deep Blue - Important Text
  deepBlue600: '#1E3A5F',
  deepBlue700: '#152D4A',
  deepBlue800: '#0C1E35',
  deepBlue900: '#061425',

  // Semantic Colors
  success: '#34D399',
  successLight: '#D1FAE5',
  warning: '#FBBF24',
  warningLight: '#FEF3C7',
  error: '#F87171',
  errorLight: '#FEE2E2',
  info: '#4A9FFF',
  infoLight: '#E6F2FF',

  // Premium Gold
  premiumLight: '#FEF9E7',
  premium: '#F5D576',
  premiumDark: '#D4AF37',

  // Text Colors
  textPrimary: '#0C1E35',
  textSecondary: '#4B5563',
  textTertiary: '#9CA3AF',
  textDisabled: '#D1D5DB',
  textWhite: '#FFFFFF',
  textAccent: '#2B7FE6',

  // Glassmorphism
  glassWhite: 'rgba(255, 255, 255, 0.85)',
  glassWhiteLight: 'rgba(255, 255, 255, 0.60)',
  glassWhiteLighter: 'rgba(255, 255, 255, 0.40)',
  glassIceBlue: 'rgba(74, 159, 255, 0.08)',
  glassIceBlueMedium: 'rgba(74, 159, 255, 0.12)',
  glassIceBlueStrong: 'rgba(74, 159, 255, 0.18)',

  // Glass Borders
  glassBorder: 'rgba(255, 255, 255, 0.30)',
  glassBorderBlue: 'rgba(74, 159, 255, 0.20)',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
};

export type ColorKey = keyof typeof colors;

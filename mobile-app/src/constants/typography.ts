// HYMNORA Typography System

export const typography = {
  // Font Sizes
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 16,
  bodyXl: 18,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 12,
  bodyXs: 10,

  // Bible Reading Sizes
  bibleXl: 22,
  bibleLg: 18,
  bibleMd: 16,
  bibleSm: 14,

  // Font Weights
  thin: '100' as const,
  extraLight: '200' as const,
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,

  // Line Heights
  tight: 1.2,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,

  // Letter Spacing
  tight: -0.02,
  normal: 0,
  wide: 0.025,
  wider: 0.05,
};

export const fontFamilies = {
  primary: 'System', // Will use system fonts
  secondary: 'System', // For Bible text
};

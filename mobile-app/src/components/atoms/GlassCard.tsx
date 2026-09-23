import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors } from '../../constants/colors';
import { radius, spacing, shadows } from '../../constants/spacing';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'light' | 'medium' | 'ice';
  withBorder?: boolean;
  withShadow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  style,
  variant = 'light',
  withBorder = true,
  withShadow = true,
}) => {
  const variantStyles = {
    light: {
      backgroundColor: colors.glassWhite,
      borderColor: colors.glassBorder,
    },
    medium: {
      backgroundColor: colors.glassWhiteLight,
      borderColor: colors.glassBorder,
    },
    ice: {
      backgroundColor: colors.glassIceBlue,
      borderColor: colors.glassBorderBlue,
    },
  };

  return (
    <View
      style={[
        styles.container,
        variantStyles[variant],
        withBorder && styles.border,
        withShadow && shadows.md,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.xl,
    padding: spacing[6],
    overflow: 'hidden',
  },
  border: {
    borderWidth: 1,
  },
});

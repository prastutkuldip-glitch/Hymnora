import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { radius, spacing, shadows } from '../../constants/spacing';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'glass' | 'outline' | 'text' | 'premium';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const sizeStyles = {
    small: {
      paddingVertical: spacing[2],
      paddingHorizontal: spacing[4],
      fontSize: typography.bodySm,
    },
    medium: {
      paddingVertical: spacing[3],
      paddingHorizontal: spacing[6],
      fontSize: typography.bodyMd,
    },
    large: {
      paddingVertical: spacing[4],
      paddingHorizontal: spacing[8],
      fontSize: typography.bodyLg,
    },
  };

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[styles.container, style]}
      >
        <LinearGradient
          colors={[colors.iceBlue500, colors.iceBlue600]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.gradient,
            {
              paddingVertical: sizeStyles[size].paddingVertical,
              paddingHorizontal: sizeStyles[size].paddingHorizontal,
            },
            disabled && styles.disabled,
          ]}
        >
          {loading ? (
            <ActivityIndicator color={colors.textWhite} />
          ) : (
            <Text
              style={[
                styles.primaryText,
                { fontSize: sizeStyles[size].fontSize },
                textStyle,
              ]}
            >
              {title}
            </Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  if (variant === 'premium') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[styles.container, style]}
      >
        <LinearGradient
          colors={[colors.premium, '#E8C84D', colors.premiumDark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.gradient,
            {
              paddingVertical: sizeStyles[size].paddingVertical,
              paddingHorizontal: sizeStyles[size].paddingHorizontal,
            },
            disabled && styles.disabled,
          ]}
        >
          {loading ? (
            <ActivityIndicator color={colors.deepBlue800} />
          ) : (
            <Text
              style={[
                styles.premiumText,
                { fontSize: sizeStyles[size].fontSize },
                textStyle,
              ]}
            >
              {title}
            </Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  if (variant === 'glass') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[
          styles.glassButton,
          {
            paddingVertical: sizeStyles[size].paddingVertical,
            paddingHorizontal: sizeStyles[size].paddingHorizontal,
          },
          disabled && styles.disabled,
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={colors.deepBlue700} />
        ) : (
          <Text
            style={[
              styles.glassText,
              { fontSize: sizeStyles[size].fontSize },
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  if (variant === 'outline') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[
          styles.outlineButton,
          {
            paddingVertical: sizeStyles[size].paddingVertical,
            paddingHorizontal: sizeStyles[size].paddingHorizontal,
          },
          disabled && styles.disabled,
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={colors.iceBlue600} />
        ) : (
          <Text
            style={[
              styles.outlineText,
              { fontSize: sizeStyles[size].fontSize },
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  // Text variant
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.6}
      style={[
        styles.textButton,
        {
          paddingVertical: sizeStyles[size].paddingVertical,
          paddingHorizontal: sizeStyles[size].paddingHorizontal,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.iceBlue600} />
      ) : (
        <Text
          style={[
            styles.textButtonText,
            { fontSize: sizeStyles[size].fontSize },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.full,
    ...shadows.md,
  },
  gradient: {
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.textWhite,
    fontWeight: typography.semibold,
    letterSpacing: typography.wide,
  },
  premiumText: {
    color: colors.deepBlue800,
    fontWeight: typography.bold,
    letterSpacing: typography.wide,
  },
  glassButton: {
    backgroundColor: colors.glassWhite,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  glassText: {
    color: colors.deepBlue700,
    fontWeight: typography.semibold,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.iceBlue400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineText: {
    color: colors.iceBlue600,
    fontWeight: typography.semibold,
  },
  textButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonText: {
    color: colors.iceBlue600,
    fontWeight: typography.semibold,
  },
  disabled: {
    opacity: 0.4,
  },
});

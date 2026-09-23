// HYMNORA 3D Premium Icon System
// Blue, Black & White with Glassmorphism

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export type Icon3DName = 
  | 'home'
  | 'bible'
  | 'hymns'
  | 'ai'
  | 'books'
  | 'profile'
  | 'audio'
  | 'search'
  | 'bookmark'
  | 'heart'
  | 'share'
  | 'settings'
  | 'notification'
  | 'download'
  | 'play'
  | 'pause'
  | 'verse'
  | 'chapter'
  | 'prayer'
  | 'cross'
  | 'star'
  | 'crown'
  | 'check'
  | 'plus';

interface Icon3DProps {
  name: Icon3DName;
  size?: number;
  color?: string;
  glassEffect?: boolean;
  premium?: boolean;
}

export const Icon3D: React.FC<Icon3DProps> = ({
  name,
  size = 24,
  color = colors.primaryBlue,
  glassEffect = true,
  premium = false,
}) => {
  const renderIcon = () => {
    switch (name) {
      case 'home':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            {/* 3D House Icon */}
            <defs>
              <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.royalBlue} />
              </linearGradient>
              <filter id="homeShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
              </filter>
            </defs>
            {/* Shadow Layer */}
            <path d="M12 3L4 9v12h16V9l-8-6z" fill={colors.shadow3DBlackMedium} filter="url(#homeShadow)" />
            {/* Main Layer */}
            <path d="M12 3L4 9v12h16V9l-8-6z" fill="url(#homeGradient)" />
            {/* Highlight Layer */}
            <path d="M12 3L4 9v11h2V10l6-4.5L18 10v10h2V9l-8-6z" fill={colors.glass3DWhiteSubtle} />
            {/* Door */}
            <rect x="9" y="14" width="6" height="7" rx="1" fill={colors.glass3DBlackLight} />
          </svg>
        );

      case 'bible':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="bibleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.deepBlue} />
              </linearGradient>
            </defs>
            {/* Book Shadow */}
            <rect x="4" y="3" width="14" height="18" rx="2" fill={colors.shadow3DBlackLight} transform="translate(0.5, 0.5)" />
            {/* Book Base */}
            <rect x="4" y="3" width="14" height="18" rx="2" fill="url(#bibleGradient)" />
            {/* Book Spine */}
            <rect x="4" y="3" width="2" height="18" fill={colors.glass3DBlackMedium} />
            {/* Cross Symbol */}
            <rect x="10" y="7" width="2" height="8" rx="1" fill={colors.pureWhite} />
            <rect x="7" y="10" width="8" height="2" rx="1" fill={colors.pureWhite} />
            {/* Highlight */}
            <rect x="6" y="3" width="11" height="3" rx="1" fill={colors.glass3DWhiteSubtle} />
          </svg>
        );

      case 'hymns':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="hymnsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.electricBlue} />
                <stop offset="100%" stopColor={colors.primaryBlue} />
              </linearGradient>
            </defs>
            {/* Music Note Shadow */}
            <circle cx="9.5" cy="16.5" r="3" fill={colors.shadow3DBlackLight} />
            <circle cx="14.5" cy="14.5" r="3" fill={colors.shadow3DBlackLight} />
            {/* Music Note Base */}
            <circle cx="9" cy="16" r="3" fill="url(#hymnsGradient)" />
            <circle cx="14" cy="14" r="3" fill="url(#hymnsGradient)" />
            {/* Note Stems */}
            <rect x="11" y="5" width="2" height="9" rx="1" fill="url(#hymnsGradient)" />
            <rect x="16" y="3" width="2" height="11" rx="1" fill="url(#hymnsGradient)" />
            {/* Connecting Line */}
            <rect x="11" y="5" width="7" height="2" rx="1" fill={colors.glass3DWhiteMedium} />
            {/* Highlights */}
            <circle cx="9" cy="16" r="1.5" fill={colors.glass3DWhiteHeavy} />
            <circle cx="14" cy="14" r="1.5" fill={colors.glass3DWhiteHeavy} />
          </svg>
        );

      case 'ai':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.skyBlue} />
                <stop offset="50%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.deepBlue} />
              </linearGradient>
            </defs>
            {/* Brain/AI Symbol Shadow */}
            <circle cx="12.5" cy="12.5" r="8" fill={colors.shadow3DBlackMedium} />
            {/* Brain Base */}
            <circle cx="12" cy="12" r="8" fill="url(#aiGradient)" />
            {/* Neural Network Lines */}
            <path d="M8 12h8M12 8v8M9 9l6 6M15 9l-6 6" stroke={colors.glass3DWhiteHeavy} strokeWidth="1.5" strokeLinecap="round" />
            {/* Neural Nodes */}
            <circle cx="8" cy="12" r="1.5" fill={colors.pureWhite} />
            <circle cx="16" cy="12" r="1.5" fill={colors.pureWhite} />
            <circle cx="12" cy="8" r="1.5" fill={colors.pureWhite} />
            <circle cx="12" cy="16" r="1.5" fill={colors.pureWhite} />
            <circle cx="12" cy="12" r="2" fill={colors.premiumGold} />
            {/* Sparkle Effect */}
            <circle cx="17" cy="7" r="1" fill={colors.glass3DWhiteHeavy} />
          </svg>
        );

      case 'books':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="booksGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.navyBlue} />
              </linearGradient>
            </defs>
            {/* Three Books Stacked */}
            {/* Back Book Shadow */}
            <rect x="9" y="6" width="10" height="13" rx="1.5" fill={colors.shadow3DBlackLight} transform="rotate(5 14 12.5)" />
            {/* Back Book */}
            <rect x="8" y="5" width="10" height="13" rx="1.5" fill={colors.deepBlue} transform="rotate(5 13 11.5)" />
            
            {/* Middle Book Shadow */}
            <rect x="6.5" y="6.5" width="11" height="13" rx="1.5" fill={colors.shadow3DBlackLight} />
            {/* Middle Book */}
            <rect x="6" y="6" width="11" height="13" rx="1.5" fill="url(#booksGradient)" />
            
            {/* Front Book Shadow */}
            <rect x="5" y="8" width="10" height="13" rx="1.5" fill={colors.shadow3DBlackLight} transform="rotate(-5 10 14.5)" />
            {/* Front Book */}
            <rect x="4" y="7" width="10" height="13" rx="1.5" fill={colors.royalBlue} transform="rotate(-5 9 13.5)" />
            
            {/* Highlights */}
            <rect x="6" y="6" width="2" height="13" fill={colors.glass3DWhiteSubtle} />
          </svg>
        );

      case 'profile':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="profileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.royalBlue} />
              </linearGradient>
            </defs>
            {/* Shadow */}
            <circle cx="12.5" cy="8.5" r="4" fill={colors.shadow3DBlackLight} />
            <path d="M12.5 14c-4 0-7 2-7 4.5V21h14v-2.5c0-2.5-3-4.5-7-4.5z" fill={colors.shadow3DBlackLight} />
            {/* Head */}
            <circle cx="12" cy="8" r="4" fill="url(#profileGradient)" />
            {/* Body */}
            <path d="M12 13c-4 0-7 2-7 4.5V20h14v-2.5c0-2.5-3-4.5-7-4.5z" fill="url(#profileGradient)" />
            {/* Highlights */}
            <circle cx="10" cy="7" r="1" fill={colors.glass3DWhiteHeavy} />
            {premium && <circle cx="17" cy="6" r="2" fill={colors.premiumGold} />}
          </svg>
        );

      case 'audio':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="audioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.skyBlue} />
                <stop offset="100%" stopColor={colors.primaryBlue} />
              </linearGradient>
            </defs>
            {/* Speaker Base */}
            <rect x="4" y="8" width="6" height="8" rx="1" fill="url(#audioGradient)" />
            {/* Sound Waves */}
            <path d="M13 7c2 1 3 3 3 5s-1 4-3 5" stroke={colors.primaryBlue} strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M16 5c3 2 4 5 4 7s-1 5-4 7" stroke={colors.primaryBlue} strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Highlight */}
            <rect x="5" y="9" width="2" height="6" rx="0.5" fill={colors.glass3DWhiteHeavy} />
          </svg>
        );

      case 'search':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.deepBlue} />
              </linearGradient>
            </defs>
            {/* Magnifying Glass Shadow */}
            <circle cx="11.5" cy="11.5" r="6" fill="none" stroke={colors.shadow3DBlackLight} strokeWidth="2.5" />
            <line x1="16.5" y1="16.5" x2="21.5" y2="21.5" stroke={colors.shadow3DBlackLight} strokeWidth="2.5" strokeLinecap="round" />
            {/* Magnifying Glass */}
            <circle cx="11" cy="11" r="6" fill="none" stroke="url(#searchGradient)" strokeWidth="2.5" />
            <line x1="16" y1="16" x2="21" y2="21" stroke="url(#searchGradient)" strokeWidth="2.5" strokeLinecap="round" />
            {/* Inner Highlight */}
            <circle cx="11" cy="11" r="4" fill={colors.glass3DBlueLight} />
          </svg>
        );

      case 'bookmark':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="bookmarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.deepBlue} />
              </linearGradient>
            </defs>
            {/* Bookmark Shadow */}
            <path d="M6.5 3.5h11v18l-5.5-4-5.5 4V3.5z" fill={colors.shadow3DBlackLight} />
            {/* Bookmark Base */}
            <path d="M6 3h11v18l-5.5-4L6 21V3z" fill="url(#bookmarkGradient)" />
            {/* Fold Effect */}
            <path d="M6 3h11v4l-11-2V3z" fill={colors.glass3DWhiteMedium} />
          </svg>
        );

      case 'heart':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B9D" />
                <stop offset="100%" stopColor="#E31C5F" />
              </linearGradient>
            </defs>
            {/* Heart Shadow */}
            <path d="M12.5 21.5l-1.5-1.4C5.5 15.1 2.5 12.3 2.5 8.9c0-2.4 1.9-4.4 4.3-4.4 1.4 0 2.7 0.6 3.7 1.7 1-1.1 2.3-1.7 3.7-1.7 2.4 0 4.3 2 4.3 4.4 0 3.4-3 6.2-8.5 11.2l-1.5 1.4z" fill={colors.shadow3DBlackLight} />
            {/* Heart Base */}
            <path d="M12 21l-1.5-1.4C5 15 2 12.2 2 8.8c0-2.4 1.9-4.4 4.3-4.4 1.4 0 2.7 0.6 3.7 1.7 1-1.1 2.3-1.7 3.7-1.7 2.4 0 4.3 2 4.3 4.4 0 3.4-3 6.2-8.5 11.2L12 21z" fill="url(#heartGradient)" />
            {/* Highlight */}
            <path d="M8 8c1-1.5 2.5-2 4-1.5" stroke={colors.glass3DWhiteHeavy} strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.premiumGoldLight} />
                <stop offset="100%" stopColor={colors.premiumGoldDark} />
              </linearGradient>
            </defs>
            {/* Star Shadow */}
            <path d="M12.5 3.5l2.5 5 5.5 0.8-4 3.9 1 5.8-5-2.6-5 2.6 1-5.8-4-3.9 5.5-0.8 2.5-5z" fill={colors.shadow3DBlackLight} />
            {/* Star Base */}
            <path d="M12 3l2.5 5L20 8.8l-4 3.9 1 5.8-5-2.6-5 2.6 1-5.8-4-3.9 5.5-0.8L12 3z" fill="url(#starGradient)" />
            {/* Inner Highlight */}
            <circle cx="12" cy="11" r="2" fill={colors.glass3DWhiteHeavy} />
          </svg>
        );

      case 'cross':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="crossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={colors.primaryBlue} />
                <stop offset="100%" stopColor={colors.deepBlue} />
              </linearGradient>
            </defs>
            {/* Cross Shadow */}
            <rect x="10.5" y="3.5" width="3" height="18" rx="1.5" fill={colors.shadow3DBlackMedium} />
            <rect x="5.5" y="9.5" width="13" height="3" rx="1.5" fill={colors.shadow3DBlackMedium} />
            {/* Cross Base */}
            <rect x="10" y="3" width="3" height="18" rx="1.5" fill="url(#crossGradient)" />
            <rect x="5" y="9" width="13" height="3" rx="1.5" fill="url(#crossGradient)" />
            {/* Highlights */}
            <rect x="10.5" y="3" width="1" height="18" rx="0.5" fill={colors.glass3DWhiteSubtle} />
            <rect x="5" y="9.5" width="13" height="1" rx="0.5" fill={colors.glass3DWhiteSubtle} />
          </svg>
        );

      case 'crown':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24">
            <defs>
              <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.premiumGold} />
                <stop offset="100%" stopColor={colors.premiumGoldDark} />
              </linearGradient>
            </defs>
            {/* Crown Base */}
            <path d="M3 18h18v2H3v-2z" fill="url(#crownGradient)" />
            <path d="M4 12l4 2 4-4 4 4 4-2v6H4v-6z" fill="url(#crownGradient)" />
            {/* Jewels */}
            <circle cx="6" cy="12" r="1.5" fill={colors.primaryBlue} />
            <circle cx="12" cy="9" r="1.5" fill={colors.primaryBlue} />
            <circle cx="18" cy="12" r="1.5" fill={colors.primaryBlue} />
            {/* Highlights */}
            <path d="M5 13l3 1.5 4-3 4 3 3-1.5" stroke={colors.glass3DWhiteHeavy} strokeWidth="1" fill="none" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <View style={[
      styles.container,
      glassEffect && styles.glassContainer,
      premium && styles.premiumContainer,
      { width: size, height: size }
    ]}>
      {renderIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glassContainer: {
    backgroundColor: colors.glass3DWhiteLight,
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.border3DWhiteLight,
    shadowColor: colors.shadow3DBlueLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 8,
  },
  premiumContainer: {
    borderColor: colors.premiumGold,
    borderWidth: 1.5,
  },
});

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from '../../components/atoms/GlassCard';
import { Button } from '../../components/atoms/Button';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing, radius } from '../../constants/spacing';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.pureWhite, colors.crystalWhite, colors.iceBlue50]}
        style={styles.gradient}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good morning</Text>
              <Text style={styles.userName}>John Doe</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="notifications-outline" size={24} color={colors.deepBlue700} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>JD</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Continue Reading */}
          <GlassCard style={styles.card}>
            <Text style={styles.sectionTitle}>Continue Bible Reading</Text>
            <View style={styles.continueReading}>
              <View>
                <Text style={styles.bookName}>John 3</Text>
                <Text style={styles.progress}>65% complete</Text>
              </View>
              <Button
                title="Continue"
                onPress={() => navigation.navigate('Bible')}
                size="small"
              />
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '65%' }]} />
            </View>
          </GlassCard>

          {/* Verse of the Day */}
          <GlassCard style={styles.card} variant="ice">
            <View style={styles.verseHeader}>
              <Text style={styles.sectionTitle}>Verse of the Day</Text>
              <Ionicons name="bookmark-outline" size={20} color={colors.iceBlue600} />
            </View>
            <Text style={styles.verseText}>
              "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
            </Text>
            <Text style={styles.verseReference}>John 3:16 (NIV)</Text>
            <View style={styles.verseActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="play-circle-outline" size={24} color={colors.iceBlue600} />
                <Text style={styles.actionText}>Listen</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={24} color={colors.iceBlue600} />
                <Text style={styles.actionText}>Favorite</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-social-outline" size={24} color={colors.iceBlue600} />
                <Text style={styles.actionText}>Share</Text>
              </TouchableOpacity>
            </View>
          </GlassCard>

          {/* Quick Access */}
          <Text style={styles.sectionHeader}>Quick Access</Text>
          <View style={styles.quickAccess}>
            <TouchableOpacity
              style={styles.quickAccessItem}
              onPress={() => navigation.navigate('Hymns')}
            >
              <View style={styles.iconBubble}>
                <Ionicons name="musical-notes" size={28} color={colors.iceBlue600} />
              </View>
              <Text style={styles.quickAccessTitle}>Hymns</Text>
              <Text style={styles.quickAccessSubtitle}>Worship songs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.iconBubble}>
                <Ionicons name="headset" size={28} color={colors.iceBlue600} />
              </View>
              <Text style={styles.quickAccessTitle}>Bible Audio</Text>
              <Text style={styles.quickAccessSubtitle}>Listen anywhere</Text>
              <View style={styles.premiumBadge}>
                <Ionicons name="lock-closed" size={10} color={colors.premiumDark} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.iconBubble}>
                <Ionicons name="sparkles" size={28} color={colors.iceBlue600} />
              </View>
              <Text style={styles.quickAccessTitle}>Ask Bible AI</Text>
              <Text style={styles.quickAccessSubtitle}>Get answers</Text>
              <View style={styles.premiumBadge}>
                <Ionicons name="lock-closed" size={10} color={colors.premiumDark} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickAccessItem}>
              <View style={styles.iconBubble}>
                <Ionicons name="book" size={28} color={colors.iceBlue600} />
              </View>
              <Text style={styles.quickAccessTitle}>Books</Text>
              <Text style={styles.quickAccessSubtitle}>Grow in faith</Text>
              <View style={styles.premiumBadge}>
                <Ionicons name="lock-closed" size={10} color={colors.premiumDark} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Recent Hymns */}
          <Text style={styles.sectionHeader}>Recently Opened Hymns</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.recentHymns}
          >
            <GlassCard style={styles.hymnCard}>
              <Text style={styles.hymnNumber}>001</Text>
              <Text style={styles.hymnTitle}>Amazing Grace</Text>
              <Text style={styles.hymnLanguage}>English</Text>
            </GlassCard>
            <GlassCard style={styles.hymnCard}>
              <Text style={styles.hymnNumber}>045</Text>
              <Text style={styles.hymnTitle}>How Great Thou Art</Text>
              <Text style={styles.hymnLanguage}>English</Text>
            </GlassCard>
            <GlassCard style={styles.hymnCard}>
              <Text style={styles.hymnNumber}>128</Text>
              <Text style={styles.hymnTitle}>Blessed Assurance</Text>
              <Text style={styles.hymnLanguage}>English</Text>
            </GlassCard>
          </ScrollView>

          {/* Upgrade to Premium */}
          <TouchableOpacity style={styles.premiumCard}>
            <LinearGradient
              colors={[colors.premium, '#E8C84D', colors.premiumDark]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.premiumGradient}
            >
              <View style={styles.premiumContent}>
                <Ionicons name="star" size={32} color={colors.deepBlue800} />
                <View style={styles.premiumText}>
                  <Text style={styles.premiumTitle}>Upgrade to Premium</Text>
                  <Text style={styles.premiumSubtitle}>
                    Unlock Bible Audio, AI Assistant, Books & more
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color={colors.deepBlue800} />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={{ height: spacing[16] }} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pureWhite,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[6],
  },
  greeting: {
    fontSize: typography.bodyMd,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  userName: {
    fontSize: typography.h3,
    color: colors.textPrimary,
    fontWeight: typography.bold,
    marginTop: spacing[1],
  },
  headerIcons: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.iceBlue500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.textWhite,
    fontSize: typography.bodyMd,
    fontWeight: typography.semibold,
  },
  card: {
    marginHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
  sectionTitle: {
    fontSize: typography.h5,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    marginBottom: spacing[3],
  },
  continueReading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  bookName: {
    fontSize: typography.h4,
    color: colors.textPrimary,
    fontWeight: typography.bold,
  },
  progress: {
    fontSize: typography.bodySm,
    color: colors.textTertiary,
    marginTop: spacing[1],
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.lightGrey200,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.iceBlue500,
    borderRadius: radius.full,
  },
  verseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verseText: {
    fontSize: typography.bodyLg,
    color: colors.textPrimary,
    lineHeight: typography.bodyLg * typography.relaxed,
    marginTop: spacing[3],
    fontStyle: 'italic',
  },
  verseReference: {
    fontSize: typography.bodyMd,
    color: colors.iceBlue700,
    fontWeight: typography.semibold,
    marginTop: spacing[3],
  },
  verseActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing[4],
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.glassBorder,
  },
  actionButton: {
    alignItems: 'center',
    gap: spacing[1],
  },
  actionText: {
    fontSize: typography.bodyXs,
    color: colors.iceBlue600,
    fontWeight: typography.medium,
  },
  sectionHeader: {
    fontSize: typography.h5,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    marginHorizontal: spacing[4],
    marginTop: spacing[2],
    marginBottom: spacing[3],
  },
  quickAccess: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[2],
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  quickAccessItem: {
    width: '47%',
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: radius.lg,
    padding: spacing[4],
    alignItems: 'center',
    position: 'relative',
  },
  iconBubble: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: colors.glassIceBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  quickAccessTitle: {
    fontSize: typography.bodyMd,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    textAlign: 'center',
  },
  quickAccessSubtitle: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
    textAlign: 'center',
    marginTop: spacing[1],
  },
  premiumBadge: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.premiumLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentHymns: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[6],
  },
  hymnCard: {
    width: 140,
    marginRight: spacing[3],
  },
  hymnNumber: {
    fontSize: typography.h3,
    color: colors.iceBlue600,
    fontWeight: typography.bold,
    marginBottom: spacing[2],
  },
  hymnTitle: {
    fontSize: typography.bodyMd,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    marginBottom: spacing[1],
  },
  hymnLanguage: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
  },
  premiumCard: {
    marginHorizontal: spacing[4],
    borderRadius: radius.xl,
    overflow: 'hidden',
    marginBottom: spacing[4],
  },
  premiumGradient: {
    padding: spacing[4],
  },
  premiumContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  premiumText: {
    flex: 1,
  },
  premiumTitle: {
    fontSize: typography.h5,
    color: colors.deepBlue800,
    fontWeight: typography.bold,
  },
  premiumSubtitle: {
    fontSize: typography.bodySm,
    color: colors.deepBlue700,
    marginTop: spacing[1],
  },
});

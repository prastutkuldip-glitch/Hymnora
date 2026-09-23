import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GlassCard } from '../../components/atoms/GlassCard';
import { Button } from '../../components/atoms/Button';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing, radius } from '../../constants/spacing';

const bibleBooks = [
  { name: 'Genesis', chapters: 50, testament: 'Old' },
  { name: 'Exodus', chapters: 40, testament: 'Old' },
  { name: 'Leviticus', chapters: 27, testament: 'Old' },
  { name: 'Numbers', chapters: 36, testament: 'Old' },
  { name: 'Matthew', chapters: 28, testament: 'New' },
  { name: 'Mark', chapters: 16, testament: 'New' },
  { name: 'Luke', chapters: 24, testament: 'New' },
  { name: 'John', chapters: 21, testament: 'New' },
  { name: 'Acts', chapters: 28, testament: 'New' },
  { name: 'Romans', chapters: 16, testament: 'New' },
];

export const BibleScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTestament, setSelectedTestament] = useState<'all' | 'Old' | 'New'>('all');

  const filteredBooks = bibleBooks.filter((book) => {
    const matchesSearch = book.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTestament = selectedTestament === 'all' || book.testament === selectedTestament;
    return matchesSearch && matchesTestament;
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.pureWhite, colors.crystalWhite, colors.iceBlue50]}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Bible</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="bookmark-outline" size={24} color={colors.deepBlue700} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="settings-outline" size={24} color={colors.deepBlue700} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Translation Selector */}
        <View style={styles.translationSelector}>
          <GlassCard style={styles.translationCard}>
            <View style={styles.translationRow}>
              <View>
                <Text style={styles.translationLabel}>Translation</Text>
                <Text style={styles.translationName}>King James Version (KJV)</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="chevron-forward" size={20} color={colors.iceBlue600} />
              </TouchableOpacity>
            </View>
          </GlassCard>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color={colors.textTertiary} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search books, chapters, or verses..."
              placeholderTextColor={colors.textTertiary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery !== '' && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color={colors.textTertiary} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Testament Filter */}
        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                styles.filterPill,
                selectedTestament === 'all' && styles.filterPillActive,
              ]}
              onPress={() => setSelectedTestament('all')}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedTestament === 'all' && styles.filterTextActive,
                ]}
              >
                All Books
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterPill,
                selectedTestament === 'Old' && styles.filterPillActive,
              ]}
              onPress={() => setSelectedTestament('Old')}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedTestament === 'Old' && styles.filterTextActive,
                ]}
              >
                Old Testament
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterPill,
                selectedTestament === 'New' && styles.filterPillActive,
              ]}
              onPress={() => setSelectedTestament('New')}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedTestament === 'New' && styles.filterTextActive,
                ]}
              >
                New Testament
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Continue Reading */}
        <GlassCard style={styles.continueCard}>
          <View style={styles.continueContent}>
            <View style={styles.continueLeft}>
              <Text style={styles.continueLabel}>Continue Reading</Text>
              <Text style={styles.continueBook}>John 3:16-21</Text>
              <Text style={styles.continueProgress}>Chapter 3 • 65% complete</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <LinearGradient
                colors={[colors.iceBlue500, colors.iceBlue600]}
                style={styles.playGradient}
              >
                <Ionicons name="play" size={24} color={colors.textWhite} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </GlassCard>

        {/* Books Grid */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.booksGrid}>
            {filteredBooks.map((book, index) => (
              <TouchableOpacity
                key={index}
                style={styles.bookCard}
                onPress={() => {
                  // Navigate to book detail
                }}
              >
                <GlassCard style={styles.bookCardInner}>
                  <View style={styles.testamentBadge}>
                    <Text style={styles.testamentBadgeText}>
                      {book.testament === 'Old' ? 'OT' : 'NT'}
                    </Text>
                  </View>
                  <Text style={styles.bookName}>{book.name}</Text>
                  <Text style={styles.bookChapters}>{book.chapters} chapters</Text>
                  <View style={styles.bookProgress}>
                    <View style={styles.bookProgressBar}>
                      <View style={[styles.bookProgressFill, { width: '0%' }]} />
                    </View>
                    <Text style={styles.bookProgressText}>Not started</Text>
                  </View>
                </GlassCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <Text style={styles.quickActionsTitle}>Quick Access</Text>
            <View style={styles.quickActionsGrid}>
              <TouchableOpacity style={styles.quickActionItem}>
                <View style={styles.quickActionIcon}>
                  <Ionicons name="bookmark-outline" size={24} color={colors.iceBlue600} />
                </View>
                <Text style={styles.quickActionText}>Bookmarks</Text>
                <Text style={styles.quickActionCount}>28</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickActionItem}>
                <View style={styles.quickActionIcon}>
                  <Ionicons name="color-palette-outline" size={24} color={colors.iceBlue600} />
                </View>
                <Text style={styles.quickActionText}>Highlights</Text>
                <View style={styles.premiumLock}>
                  <Ionicons name="lock-closed" size={12} color={colors.premiumDark} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickActionItem}>
                <View style={styles.quickActionIcon}>
                  <Ionicons name="create-outline" size={24} color={colors.iceBlue600} />
                </View>
                <Text style={styles.quickActionText}>Notes</Text>
                <View style={styles.premiumLock}>
                  <Ionicons name="lock-closed" size={12} color={colors.premiumDark} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickActionItem}>
                <View style={styles.quickActionIcon}>
                  <Ionicons name="time-outline" size={24} color={colors.iceBlue600} />
                </View>
                <Text style={styles.quickActionText}>History</Text>
                <Text style={styles.quickActionCount}>45</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: spacing[20] }} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[3],
  },
  headerTitle: {
    fontSize: typography.h2,
    color: colors.textPrimary,
    fontWeight: typography.bold,
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  translationSelector: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[3],
  },
  translationCard: {
    padding: spacing[4],
  },
  translationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  translationLabel: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing[1],
  },
  translationName: {
    fontSize: typography.bodyLg,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
  },
  searchContainer: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[3],
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: radius.full,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    gap: spacing[2],
  },
  searchInput: {
    flex: 1,
    fontSize: typography.bodyMd,
    color: colors.textPrimary,
  },
  filterContainer: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
  filterPill: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: radius.full,
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    marginRight: spacing[2],
  },
  filterPillActive: {
    backgroundColor: colors.glassIceBlueStrong,
    borderColor: colors.glassBorderBlue,
  },
  filterText: {
    fontSize: typography.bodyMd,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  filterTextActive: {
    color: colors.iceBlue700,
    fontWeight: typography.semibold,
  },
  continueCard: {
    marginHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
  continueContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continueLeft: {
    flex: 1,
  },
  continueLabel: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing[1],
  },
  continueBook: {
    fontSize: typography.h4,
    color: colors.textPrimary,
    fontWeight: typography.bold,
    marginBottom: spacing[1],
  },
  continueProgress: {
    fontSize: typography.bodySm,
    color: colors.textSecondary,
  },
  playButton: {
    borderRadius: 28,
    overflow: 'hidden',
  },
  playGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[4],
  },
  booksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  bookCard: {
    width: '48%',
  },
  bookCardInner: {
    position: 'relative',
    minHeight: 140,
  },
  testamentBadge: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
    backgroundColor: colors.iceBlue500,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: radius.sm,
  },
  testamentBadgeText: {
    fontSize: typography.bodyXs,
    color: colors.textWhite,
    fontWeight: typography.bold,
  },
  bookName: {
    fontSize: typography.h5,
    color: colors.textPrimary,
    fontWeight: typography.bold,
    marginBottom: spacing[1],
  },
  bookChapters: {
    fontSize: typography.bodySm,
    color: colors.textTertiary,
    marginBottom: spacing[3],
  },
  bookProgress: {
    marginTop: 'auto',
  },
  bookProgressBar: {
    height: 3,
    backgroundColor: colors.lightGrey200,
    borderRadius: radius.full,
    overflow: 'hidden',
    marginBottom: spacing[1],
  },
  bookProgressFill: {
    height: '100%',
    backgroundColor: colors.iceBlue500,
  },
  bookProgressText: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
  },
  quickActions: {
    marginBottom: spacing[6],
  },
  quickActionsTitle: {
    fontSize: typography.h5,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    marginBottom: spacing[3],
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  quickActionItem: {
    width: '48%',
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: radius.lg,
    padding: spacing[4],
    alignItems: 'center',
    position: 'relative',
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.glassIceBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
  },
  quickActionText: {
    fontSize: typography.bodyMd,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    textAlign: 'center',
  },
  quickActionCount: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
    marginTop: spacing[1],
  },
  premiumLock: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.premiumLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

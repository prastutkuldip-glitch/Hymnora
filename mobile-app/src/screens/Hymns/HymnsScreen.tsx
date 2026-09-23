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

const categories = [
  { id: '1', name: 'All Hymns', icon: 'musical-notes' },
  { id: '2', name: 'Worship & Praise', icon: 'heart' },
  { id: '3', name: 'Christmas', icon: 'snow' },
  { id: '4', name: 'Traditional', icon: 'book' },
];

const hymns = [
  { id: '1', number: '001', title: 'Amazing Grace', language: 'English', category: 'Traditional', views: 12500 },
  { id: '2', number: '045', title: 'How Great Thou Art', language: 'English', category: 'Worship & Praise', views: 10200 },
  { id: '3', number: '128', title: 'Blessed Assurance', language: 'English', category: 'Traditional', views: 8700 },
  { id: '4', number: '089', title: 'Holy, Holy, Holy', language: 'English', category: 'Worship & Praise', views: 7500 },
  { id: '5', number: '234', title: 'Silent Night', language: 'English', category: 'Christmas', views: 9200 },
  { id: '6', number: '156', title: 'In Christ Alone', language: 'English', category: 'Worship & Praise', views: 11000 },
];

export const HymnsScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('1');

  const filteredHymns = hymns.filter((hymn) => {
    const matchesSearch =
      hymn.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hymn.number.includes(searchQuery);
    return matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.pureWhite, colors.crystalWhite, colors.iceBlue50]}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hymns</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="heart-outline" size={24} color={colors.deepBlue700} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="filter-outline" size={24} color={colors.deepBlue700} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color={colors.textTertiary} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search by name, number, or lyrics..."
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

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryPill,
                  selectedCategory === category.id && styles.categoryPillActive,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Ionicons
                  name={category.icon as any}
                  size={18}
                  color={
                    selectedCategory === category.id
                      ? colors.iceBlue700
                      : colors.textSecondary
                  }
                />
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category.id && styles.categoryTextActive,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsRow}>
          <TouchableOpacity style={styles.quickActionButton}>
            <LinearGradient
              colors={[colors.iceBlue500, colors.iceBlue600]}
              style={styles.quickActionGradient}
            >
              <Ionicons name="add" size={24} color={colors.textWhite} />
              <Text style={styles.quickActionButtonText}>Create Hymn</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickActionButton}>
            <View style={styles.quickActionGlass}>
              <Ionicons name="folder-outline" size={24} color={colors.iceBlue600} />
              <Text style={styles.quickActionGlassText}>My Hymns</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Hymns List */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Featured Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Hymns</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {hymns.slice(0, 3).map((hymn) => (
                <TouchableOpacity key={hymn.id} style={styles.featuredCard}>
                  <GlassCard variant="ice">
                    <View style={styles.featuredHeader}>
                      <View style={styles.featuredNumber}>
                        <Text style={styles.featuredNumberText}>{hymn.number}</Text>
                      </View>
                      <View style={styles.languageBadge}>
                        <Text style={styles.languageBadgeText}>{hymn.language}</Text>
                      </View>
                    </View>
                    <Text style={styles.featuredTitle}>{hymn.title}</Text>
                    <View style={styles.featuredFooter}>
                      <View style={styles.featuredStats}>
                        <Ionicons name="eye-outline" size={14} color={colors.textTertiary} />
                        <Text style={styles.featuredStatsText}>{(hymn.views / 1000).toFixed(1)}K</Text>
                      </View>
                      <TouchableOpacity>
                        <Ionicons name="heart-outline" size={20} color={colors.iceBlue600} />
                      </TouchableOpacity>
                    </View>
                  </GlassCard>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* All Hymns */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Official Hymns</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all →</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.hymnsList}>
              {filteredHymns.map((hymn) => (
                <TouchableOpacity key={hymn.id} style={styles.hymnCard}>
                  <GlassCard>
                    <View style={styles.hymnCardContent}>
                      <View style={styles.hymnNumber}>
                        <Text style={styles.hymnNumberText}>{hymn.number}</Text>
                      </View>
                      <View style={styles.hymnInfo}>
                        <Text style={styles.hymnTitle}>{hymn.title}</Text>
                        <View style={styles.hymnMeta}>
                          <View style={styles.hymnMetaBadge}>
                            <Text style={styles.hymnMetaText}>{hymn.language}</Text>
                          </View>
                          <View style={styles.hymnMetaBadge}>
                            <Text style={styles.hymnMetaText}>{hymn.category}</Text>
                          </View>
                        </View>
                        <View style={styles.hymnStats}>
                          <Ionicons name="eye-outline" size={12} color={colors.textTertiary} />
                          <Text style={styles.hymnStatsText}>{hymn.views.toLocaleString()} views</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.hymnAction}>
                        <Ionicons name="chevron-forward" size={20} color={colors.iceBlue600} />
                      </TouchableOpacity>
                    </View>
                  </GlassCard>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* User Hymns Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Public Hymns</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>Explore →</Text>
              </TouchableOpacity>
            </View>
            <GlassCard style={styles.publicHymnsCard}>
              <View style={styles.publicHymnsContent}>
                <View style={styles.publicHymnsIcon}>
                  <Ionicons name="people-outline" size={32} color={colors.iceBlue600} />
                </View>
                <Text style={styles.publicHymnsTitle}>Discover Community Hymns</Text>
                <Text style={styles.publicHymnsText}>
                  Explore hymns shared by other users from around the world
                </Text>
                <Button
                  title="Browse Public Hymns"
                  onPress={() => {}}
                  variant="outline"
                  size="small"
                  style={styles.publicHymnsButton}
                />
              </View>
            </GlassCard>
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
  categoriesContainer: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: radius.full,
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    marginRight: spacing[2],
  },
  categoryPillActive: {
    backgroundColor: colors.glassIceBlueStrong,
    borderColor: colors.glassBorderBlue,
  },
  categoryText: {
    fontSize: typography.bodyMd,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  categoryTextActive: {
    color: colors.iceBlue700,
    fontWeight: typography.semibold,
  },
  quickActionsRow: {
    flexDirection: 'row',
    gap: spacing[3],
    paddingHorizontal: spacing[4],
    marginBottom: spacing[4],
  },
  quickActionButton: {
    flex: 1,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  quickActionGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
  },
  quickActionButtonText: {
    color: colors.textWhite,
    fontSize: typography.bodyMd,
    fontWeight: typography.semibold,
  },
  quickActionGlass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    backgroundColor: colors.glassWhite,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: radius.lg,
  },
  quickActionGlassText: {
    color: colors.iceBlue600,
    fontSize: typography.bodyMd,
    fontWeight: typography.semibold,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[4],
  },
  section: {
    marginBottom: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  sectionTitle: {
    fontSize: typography.h5,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
  },
  seeAllText: {
    fontSize: typography.bodyMd,
    color: colors.iceBlue600,
    fontWeight: typography.medium,
  },
  featuredCard: {
    width: 200,
    marginRight: spacing[3],
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  featuredNumber: {
    backgroundColor: colors.iceBlue500,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: radius.md,
  },
  featuredNumberText: {
    fontSize: typography.bodyLg,
    color: colors.textWhite,
    fontWeight: typography.bold,
  },
  languageBadge: {
    backgroundColor: colors.glassWhite,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: radius.sm,
  },
  languageBadgeText: {
    fontSize: typography.bodyXs,
    color: colors.textSecondary,
    fontWeight: typography.medium,
  },
  featuredTitle: {
    fontSize: typography.bodyLg,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    marginBottom: spacing[3],
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  featuredStatsText: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
  },
  hymnsList: {
    gap: spacing[3],
  },
  hymnCard: {
    marginBottom: spacing[0],
  },
  hymnCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  hymnNumber: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.iceBlue500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hymnNumberText: {
    fontSize: typography.bodyLg,
    color: colors.textWhite,
    fontWeight: typography.bold,
  },
  hymnInfo: {
    flex: 1,
  },
  hymnTitle: {
    fontSize: typography.bodyLg,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    marginBottom: spacing[1],
  },
  hymnMeta: {
    flexDirection: 'row',
    gap: spacing[2],
    marginBottom: spacing[1],
  },
  hymnMetaBadge: {
    backgroundColor: colors.glassIceBlue,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: radius.sm,
  },
  hymnMetaText: {
    fontSize: typography.bodyXs,
    color: colors.iceBlue700,
    fontWeight: typography.medium,
  },
  hymnStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  hymnStatsText: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
  },
  hymnAction: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.glassIceBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  publicHymnsCard: {
    padding: spacing[6],
  },
  publicHymnsContent: {
    alignItems: 'center',
  },
  publicHymnsIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.glassIceBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  publicHymnsTitle: {
    fontSize: typography.h5,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    textAlign: 'center',
    marginBottom: spacing[2],
  },
  publicHymnsText: {
    fontSize: typography.bodyMd,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.bodyMd * typography.relaxed,
    marginBottom: spacing[4],
  },
  publicHymnsButton: {
    minWidth: 180,
  },
});

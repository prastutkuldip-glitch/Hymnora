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

export const ProfileScreen = ({ navigation }: any) => {
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
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarLarge}>
              <Text style={styles.avatarLargeText}>JD</Text>
            </View>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>john.doe@email.com</Text>
            <Button
              title="Edit Profile"
              onPress={() => {}}
              variant="glass"
              size="small"
              style={styles.editButton}
            />
          </View>

          {/* Subscription Card */}
          <GlassCard style={styles.subscriptionCard}>
            <View style={styles.subscriptionHeader}>
              <View>
                <Text style={styles.subscriptionLabel}>Current Plan</Text>
                <View style={styles.planBadge}>
                  <Ionicons name="star" size={16} color={colors.deepBlue800} />
                  <Text style={styles.planBadgeText}>Premium Monthly</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Ionicons name="settings-outline" size={24} color={colors.iceBlue600} />
              </TouchableOpacity>
            </View>
            <View style={styles.subscriptionDetails}>
              <View style={styles.subscriptionDetail}>
                <Text style={styles.subscriptionDetailLabel}>Status</Text>
                <Text style={styles.subscriptionDetailValue}>Active</Text>
              </View>
              <View style={styles.subscriptionDetail}>
                <Text style={styles.subscriptionDetailLabel}>Next billing</Text>
                <Text style={styles.subscriptionDetailValue}>Feb 20, 2024</Text>
              </View>
            </View>
          </GlassCard>

          {/* Activity Stats */}
          <Text style={styles.sectionTitle}>My Activity</Text>
          <View style={styles.activityGrid}>
            <GlassCard style={styles.activityCard}>
              <Ionicons name="musical-notes" size={24} color={colors.iceBlue600} />
              <Text style={styles.activityCount}>12</Text>
              <Text style={styles.activityLabel}>My Hymns</Text>
            </GlassCard>
            <GlassCard style={styles.activityCard}>
              <Ionicons name="heart" size={24} color={colors.iceBlue600} />
              <Text style={styles.activityCount}>45</Text>
              <Text style={styles.activityLabel}>Saved</Text>
            </GlassCard>
            <GlassCard style={styles.activityCard}>
              <Ionicons name="bookmark" size={24} color={colors.iceBlue600} />
              <Text style={styles.activityCount}>28</Text>
              <Text style={styles.activityLabel}>Bookmarks</Text>
            </GlassCard>
            <GlassCard style={styles.activityCard}>
              <Ionicons name="color-palette" size={24} color={colors.iceBlue600} />
              <Text style={styles.activityCount}>67</Text>
              <Text style={styles.activityLabel}>Highlights</Text>
            </GlassCard>
          </View>

          {/* Quick Links */}
          <Text style={styles.sectionTitle}>Quick Links</Text>
          <GlassCard style={styles.linksCard}>
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="musical-note-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>My Hymns</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="heart-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Saved Hymns</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="bookmark-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Bible Bookmarks</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="time-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Reading History</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
          </GlassCard>

          {/* Settings */}
          <Text style={styles.sectionTitle}>Settings</Text>
          <GlassCard style={styles.linksCard}>
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="person-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Account Settings</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="globe-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>App Language</Text>
              </View>
              <View style={styles.linkRight}>
                <Text style={styles.linkValue}>English</Text>
                <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
              </View>
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="notifications-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Notifications</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="shield-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Privacy & Security</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
          </GlassCard>

          {/* About */}
          <Text style={styles.sectionTitle}>About</Text>
          <GlassCard style={styles.linksCard}>
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="information-circle-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>About Hymnora</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <TouchableOpacity style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="help-circle-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Help & Support</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
            <View style={styles.linkDivider} />
            <View style={styles.linkItem}>
              <View style={styles.linkLeft}>
                <View style={styles.linkIcon}>
                  <Ionicons name="code-outline" size={20} color={colors.iceBlue600} />
                </View>
                <Text style={styles.linkText}>Version</Text>
              </View>
              <Text style={styles.linkValue}>1.0.0</Text>
            </View>
          </GlassCard>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

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
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: spacing[8],
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.iceBlue500,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  avatarLargeText: {
    fontSize: typography.h2,
    color: colors.textWhite,
    fontWeight: typography.bold,
  },
  userName: {
    fontSize: typography.h3,
    color: colors.textPrimary,
    fontWeight: typography.bold,
    marginBottom: spacing[1],
  },
  userEmail: {
    fontSize: typography.bodyMd,
    color: colors.textSecondary,
    marginBottom: spacing[3],
  },
  editButton: {
    minWidth: 120,
  },
  subscriptionCard: {
    marginHorizontal: spacing[4],
    marginBottom: spacing[6],
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[4],
  },
  subscriptionLabel: {
    fontSize: typography.bodyXs,
    color: colors.textTertiary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing[2],
  },
  planBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    backgroundColor: colors.premium,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: radius.md,
  },
  planBadgeText: {
    fontSize: typography.bodyMd,
    color: colors.deepBlue800,
    fontWeight: typography.semibold,
  },
  subscriptionDetails: {
    flexDirection: 'row',
    gap: spacing[4],
  },
  subscriptionDetail: {
    flex: 1,
  },
  subscriptionDetailLabel: {
    fontSize: typography.bodySm,
    color: colors.textTertiary,
    marginBottom: spacing[1],
  },
  subscriptionDetailValue: {
    fontSize: typography.bodyMd,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
  },
  sectionTitle: {
    fontSize: typography.h5,
    color: colors.textPrimary,
    fontWeight: typography.semibold,
    marginHorizontal: spacing[4],
    marginBottom: spacing[3],
    marginTop: spacing[2],
  },
  activityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[2],
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  activityCard: {
    width: '47%',
    alignItems: 'center',
    paddingVertical: spacing[5],
  },
  activityCount: {
    fontSize: typography.h2,
    color: colors.textPrimary,
    fontWeight: typography.bold,
    marginTop: spacing[2],
  },
  activityLabel: {
    fontSize: typography.bodySm,
    color: colors.textSecondary,
    marginTop: spacing[1],
  },
  linksCard: {
    marginHorizontal: spacing[4],
    marginBottom: spacing[6],
    padding: 0,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  linkLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    flex: 1,
  },
  linkIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.glassIceBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: typography.bodyMd,
    color: colors.textPrimary,
    fontWeight: typography.medium,
  },
  linkRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  linkValue: {
    fontSize: typography.bodyMd,
    color: colors.textSecondary,
  },
  linkDivider: {
    height: 1,
    backgroundColor: colors.lightGrey200,
    marginHorizontal: spacing[4],
  },
  logoutButton: {
    marginHorizontal: spacing[4],
    paddingVertical: spacing[4],
    alignItems: 'center',
  },
  logoutText: {
    fontSize: typography.bodyLg,
    color: colors.error,
    fontWeight: typography.semibold,
  },
});

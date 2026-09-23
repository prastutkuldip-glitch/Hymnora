import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { BibleScreen } from '../screens/Bible/BibleScreen';
import { HymnsScreen } from '../screens/Hymns/HymnsScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing, radius } from '../constants/spacing';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.iceBlue600,
        tabBarInactiveTintColor: colors.silver400,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarBackground: () => (
          <View style={styles.tabBarBackground}>
            <View style={styles.tabBarBackgroundInner} />
          </View>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bible"
        component={BibleScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hymns"
        component={HymnsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons name={focused ? 'musical-notes' : 'musical-notes-outline'} size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AI"
        component={HomeScreen} // Placeholder
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons name={focused ? 'sparkles' : 'sparkles-outline'} size={size} color={color} />
              <View style={styles.premiumDot} />
            </View>
          ),
          tabBarLabel: 'Ask AI',
        }}
      />
      <Tab.Screen
        name="Books"
        component={HomeScreen} // Placeholder
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons name={focused ? 'library' : 'library-outline'} size={size} color={color} />
              <View style={styles.premiumDot} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: spacing[4],
    left: spacing[4],
    right: spacing[4],
    height: 68,
    borderRadius: radius['2xl'],
    borderWidth: 1,
    borderColor: colors.glassBorder,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 48,
  },
  tabBarBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: radius['2xl'],
    overflow: 'hidden',
  },
  tabBarBackgroundInner: {
    flex: 1,
    backgroundColor: colors.glassWhite,
    backdropFilter: 'blur(24px)',
  },
  tabBarLabel: {
    fontSize: typography.bodyXs,
    fontWeight: typography.semibold,
    marginTop: spacing[1],
  },
  tabBarItem: {
    paddingVertical: spacing[2],
  },
  iconContainer: {
    position: 'relative',
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  iconContainerActive: {
    backgroundColor: colors.glassIceBlueStrong,
  },
  premiumDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.premium,
  },
});

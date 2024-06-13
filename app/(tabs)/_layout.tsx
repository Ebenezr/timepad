import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useThemeStore } from '@/store/themeStore';

export default function TabLayout() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors[theme ?? 'light'].background,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name='timer'
        options={{
          title: 'Timer',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='clock-time-five' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='plus-circle' size={50} color={color} />
          ),
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialIcons
                    name='dots-horizontal'
                    size={25}
                    color={Colors[theme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='report'
        options={{
          title: 'Report',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='pie-chart' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
// clock-time-five-outline
// plus-circle
// pie-chart-outline

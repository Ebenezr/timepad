import React from 'react';
import { Link, Tabs, useRouter } from 'expo-router';
import { Pressable, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@/constants/Colors';
import { useThemeStore } from '@/store/themeStore';
import TabBar from '@/components/TabBar';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const theme = useThemeStore((state) => state.theme);
  const router = useRouter();

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name='timer'
        options={{
          title: 'Timer',
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name='arrow-back' size={34} color={Colors.dark.dark} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',

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
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name='arrow-back' size={34} color={Colors.dark.dark} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}

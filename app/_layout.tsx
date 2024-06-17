import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '@/context/AuthProvider';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/login',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={Colors.light.primary} />
      </View>
    );
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const theme = useThemeStore((state) => state.theme);
  const router = useRouter();

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#0D0A1C',
    },
  };

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FAFAFF',
    },
  };

  return (
    <AuthProvider>
      <ThemeProvider
        value={theme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}
      >
        <GestureHandlerRootView>
          <Stack>
            <Stack.Screen
              name='(auth)/(tabs)'
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='(public)/login'
              options={{
                headerShown: false,
                title: '',
                headerBackTitle: '',
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen
              name='(public)/reset-password'
              options={{
                headerShown: false,
                title: '',
                headerBackTitle: '',
                headerShadowVisible: false,
                headerLeft: () => (
                  <TouchableOpacity onPress={router.back}>
                    <Ionicons
                      name='arrow-back'
                      size={34}
                      color={Colors.dark.dark}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name='(public)/signup'
              options={{
                headerShown: false,
                title: '',
                headerBackTitle: '',
                headerShadowVisible: false,
                headerLeft: () => (
                  <TouchableOpacity onPress={router.back}>
                    <Ionicons
                      name='arrow-back'
                      size={34}
                      color={Colors.dark.dark}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </AuthProvider>
  );
}

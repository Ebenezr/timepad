import { ReactNode, createContext, useEffect } from 'react';
import { useContext, useState } from 'react';
import { router, useSegments } from 'expo-router';
import { useAuthStore } from '@/store/authStore';

type User = {
  uid?: string;
  email?: string | null;
};

type AuthProvider = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  resetPassword: (email: string) => void;
};

function useProtectedRoute(user: User | null) {
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    if (!user && inAuthGroup) {
      router.replace('/login');
    } else if (user && !inAuthGroup) {
      router.replace('/(auth)/(tabs)/');
    }
  }, [user, segments]);
}

export const AuthContext = createContext<AuthProvider>({
  user: null,
  login: () => false,
  logout: () => {},
  resetPassword: () => {},
});

export function useAuth() {
  if (!useContext(AuthContext)) {
    throw new Error('useAuth must be used within a <AuthProvider />');
  }

  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { login, logout, user, resetPassword } = useAuthStore();

  useProtectedRoute(user);

  return (
    <AuthContext.Provider value={{ user, login, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

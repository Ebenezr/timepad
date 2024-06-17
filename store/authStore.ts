import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv';

type User = {
  id: string;
  email: string;
};

interface AuthStore {
  user: User | null;
  setUser: (user: any) => void;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  resetPassword: (email: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      login: (email, password) => {
        console.log('login', email, password);
        set({ user: { id: '1', email } });
        return true;
      },
      logout: () => set({ user: null }),
      resetPassword: (email) => {
        console.log('resetPassword', email);
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

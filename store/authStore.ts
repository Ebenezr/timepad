import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv';
import { signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase/config';

type User = {
  uid?: string;
  email?: string | null;
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
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => {
            console.log('res', res);
            set({
              user: {
                uid: res.user?.uid,
                email: res.user?.email,
              },
            });
          })
          .catch((error) => {
            throw new Error(error?.message);
          });
        return true;
      },
      logout: () => {
        signOut(auth)
          .then(() => {
            set({ user: null });
          })
          .catch((error) => {
            throw new Error(error?.message);
          });
      },
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

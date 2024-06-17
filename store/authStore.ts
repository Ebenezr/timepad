import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv';
import { signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

type User = {
  uid?: string;
  email?: string | null;
};

interface AuthStore {
  user: User | null;
  loginError: string | null;

  setUser: (user: any) => void;
  login: (username: string, password: string) => boolean;
  signup: (email: string, password: string) => void;
  logout: () => void;
  resetPassword: (email: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      loginError: null,
      setUser: (user) => set({ user }),
      login: (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((res) => {
            set({
              user: {
                uid: res.user?.uid,
                email: res.user?.email,
              },
            });
          })
          .catch((error) => {
            set({ loginError: 'Invalid email or password' });
            throw new Error(error?.message);
          });
        return true;
      },
      signup: (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            set({
              user: {
                uid: res.user?.uid,
                email: res.user?.email,
              },
            });
          })
          .catch((error) => {
            set({ loginError: 'Failed to create account' });
            throw new Error(error?.message);
          });
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

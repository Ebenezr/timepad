import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

export const mmkvStorage = new MMKV({
  id: 'zustand',
  encryptionKey: 'zustand-encryption-key',
});

export const zustandStorage: StateStorage = {
  setItem: (name: string, value: string) => {
    return mmkvStorage.set(name, value);
  },
  getItem: (name: string) => {
    const value = mmkvStorage.getString(name);
    return value ?? null;
  },

  removeItem: (name: string) => {
    return mmkvStorage.delete(name);
  },
};

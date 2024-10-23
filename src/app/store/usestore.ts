import { User } from '@prisma/client';
import { create } from 'zustand';

interface DataState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useDataStore = create<DataState>((set) => ({
  user: null, 
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useDataStore;

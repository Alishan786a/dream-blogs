import { create } from 'zustand';
import authSlice from './slices/authSlice';
import { AuthState } from '@/types/store';
const useAuthStore = create<AuthState>()((set, get) => ({
  ...authSlice(set, get),
}));


export { useAuthStore };

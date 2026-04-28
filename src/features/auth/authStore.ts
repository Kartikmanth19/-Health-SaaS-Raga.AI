import { create } from "zustand";
import { auth } from "../../services/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  login: async (email: string, password: string) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    set({ user: res.user });
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null });
  },

  initAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },
}));
import { create } from "zustand";
import { supabase } from "../libs/supabase";

interface AuthState {
  user: any | null;
  loading: boolean;
  setUser: (user: any | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: { name: "shahrear", role: "member" },
  loading: true,
  setUser: (user) => set({ user }),
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user });
  },
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
  restoreSession: async () => {
    const { data } = await supabase.auth.getSession();
    // set({ user: data.session?.user ?? null, loading: false });
    set({ user: { name: "shahrear", role: "member" }, loading: false });
  },
}));

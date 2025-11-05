import AsyncStorage from "@react-native-async-storage/async-storage";
import { StateStorage } from "zustand/middleware";

export const asyncStorage: StateStorage = {
  setItem: async (name, value) => {
    try {
      await AsyncStorage.setItem(name, value);
    } catch (error) {
      console.error("AsyncStorage setItem error:", error);
    }
  },
  getItem: async (name) => {
    try {
      const value = await AsyncStorage.getItem(name);
      return value ?? null;
    } catch (error) {
      console.error("AsyncStorage getItem error:", error);
      return null;
    }
  },
  removeItem: async (name) => {
    try {
      await AsyncStorage.removeItem(name);
    } catch (error) {
      console.error("AsyncStorage removeItem error:", error);
    }
  },
};

import { useUIStore } from "@/src/stores/useUIStore";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { themes } from "../../utils/color-theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useUIStore();

  return (
    <>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <View style={[themes[theme], { flex: 1 }]} className="bg-background">
        {children}
      </View>
    </>
  );
};

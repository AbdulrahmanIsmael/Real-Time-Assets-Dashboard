"use client";

import { createContext, useState } from "react";

import { I_ThemeContext } from "@/types/providers-types";

export const themeContext = createContext<I_ThemeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(false);

  const themeData: I_ThemeContext = {
    theme,
    toggleTheme: setTheme,
  };
  return (
    <themeContext.Provider value={themeData}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;

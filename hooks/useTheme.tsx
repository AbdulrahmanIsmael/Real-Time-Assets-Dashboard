"use client";

import { I_ThemeContext } from "@/types/providers-types";
import { themeContext } from "@/components/providers/UI/Theme-provider";
import { useContext } from "react";

const useTheme = () => {
  const theme = useContext<I_ThemeContext | null>(themeContext);
  let html = null;

  if (typeof window === "object") {
    html = document.documentElement;
  }

  const toggleTheme = () => {
    theme?.toggleTheme((prevState) => !prevState);
    html!.classList.toggle("dark");
  };

  return { theme: theme?.theme, toggleTheme };
};

export default useTheme;

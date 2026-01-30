import { Dispatch, SetStateAction } from "react";

export interface I_ThemeContext {
  theme: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}

export interface I_SortDisplayContext {
  isSortDisplay: boolean;
  toggleSortDisplay: Dispatch<SetStateAction<boolean>>;
}

export interface I_FilterDisplayContext {
  isFilterDisplay: boolean;
  toggleFilterDisplay: Dispatch<SetStateAction<boolean>>;
}

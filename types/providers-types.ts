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

export interface I_GeneralDisplayContext {
  isDisplay: boolean;
  toggleDisplay: Dispatch<SetStateAction<boolean>>;
}

export interface I_SortContext {
  sort: string;
  setSort: (value: string) => void;
  order: string;
  setOrder: (value: string) => void;
}

export interface I_FilterContext {
  filter: string[];
  setFilter: Dispatch<SetStateAction<string[]>>;
}

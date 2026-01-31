"use client";

import { createContext, useState } from "react";

import { I_SearchInputContext } from "@/types/providers-types";

export const searchInputContext = createContext<I_SearchInputContext | null>(
  null,
);

const SearchInputProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState("");

  return (
    <searchInputContext.Provider value={{ search, setSearch }}>
      {children}
    </searchInputContext.Provider>
  );
};

export default SearchInputProvider;

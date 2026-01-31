"use client";

import { createContext, useState } from "react";

import { I_FilterDisplayContext } from "@/types/providers-types";

export const filterDisplayContext =
  createContext<I_FilterDisplayContext | null>(null);

const FilterDisplayProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFilterDisplay, setIsFilterDisplay] = useState(false);

  const data = {
    isFilterDisplay,
    toggleFilterDisplay: setIsFilterDisplay,
  };

  return (
    <filterDisplayContext.Provider value={data}>
      {children}
    </filterDisplayContext.Provider>
  );
};

export default FilterDisplayProvider;

"use client";

import { createContext, useState } from "react";

import { I_SortDisplayContext } from "@/types/providers-types";

export const sortDisplayContext = createContext<I_SortDisplayContext | null>(
  null,
);

const SortDisplayProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSortDisplay, setIsSortDisplay] = useState(false);

  const data = {
    isSortDisplay,
    toggleSortDisplay: setIsSortDisplay,
  };

  return (
    <sortDisplayContext.Provider value={data}>
      {children}
    </sortDisplayContext.Provider>
  );
};

export default SortDisplayProvider;

"use client";

import { createContext, useState } from "react";

import { I_FilterContext } from "@/types/providers-types";
import { tableHeadings } from "@/lib/constants/table-constants";

export const filterContext = createContext<I_FilterContext | string[]>(
  tableHeadings,
);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<string[]>(tableHeadings);

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;

"use client";

import { createContext, useState } from "react";

import { I_SortContext } from "@/types/providers-types";

export const sortContext = createContext<I_SortContext | null>(null);

const SortProvider = ({ children }: { children: React.ReactNode }) => {
  const [sort, setSort] = useState<string>("");
  const [order, setOrder] = useState<string>("");

  return (
    <sortContext.Provider value={{ sort, setSort, order, setOrder }}>
      {children}
    </sortContext.Provider>
  );
};

export default SortProvider;

"use client";

import { I_SortContext } from "@/types/providers-types";
import { revalidateAssetsTag } from "@/app/actions";
import { sortContext } from "@/components/providers/logic/ٍSort-provider";
import { useContext } from "react";
import useSortDisplay from "@/hooks/useSortDisplay";

const useSortBy = () => {
  const sort = useContext<I_SortContext | null>(sortContext);
  const { toggleSortDisplay } = useSortDisplay();

  const sortBy = async (value: string) => {
    sort?.setSort(value);
    toggleSortDisplay(false);
    await revalidateAssetsTag();
  };

  const setSortOrder = (value: string) => {
    sort?.setOrder(value);
  };

  const resetSort = () => {
    sort?.setSort("");
    sort?.setOrder("");
  };

  return {
    sort: sort?.sort,
    sortBy,
    order: sort?.order,
    setSortOrder,
    resetSort,
  };
};

export default useSortBy;

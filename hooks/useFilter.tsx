"use client";

import { I_FilterContext } from "@/types/providers-types";
import { filterContext } from "@/components/providers/logic/Filter-provider";
import { revalidateAssetsTag } from "@/app/actions";
import { tableHeadings } from "@/lib/constants/table-constants";
import { useContext } from "react";

const useFilter = () => {
  const filter = useContext<I_FilterContext | string[]>(filterContext);

  const filterAssets = async (value: string, type: "display" | "hide") => {
    if (type === "display") {
      (filter as I_FilterContext)?.setFilter((prevState) => {
        // condition: if the value exists in the filter array, don't add it
        if (!prevState.includes(value)) {
          return [...prevState, value];
        }
        return prevState;
      });
    } else {
      (filter as I_FilterContext)?.setFilter((prevState) =>
        prevState.filter((item) => item !== value),
      );
    }
    await revalidateAssetsTag();
  };

  const resetFilter = () => {
    (filter as I_FilterContext).setFilter(tableHeadings);
  };

  return { filteredAssets: filter?.filter, filterAssets, resetFilter };
};

export default useFilter;

"use client";

import dynamic from "next/dynamic";
import useFilterDisplay from "@/hooks/useFilterDisplay";
import useSortDisplay from "@/hooks/useSortDisplay";

const FilterBox = dynamic(() => import("@/components/ui/FilterBox"));
const SortBox = dynamic(() => import("@/components/ui/SortBox"));

const PopupBoxes = () => {
  const { isSortDisplay } = useSortDisplay();
  const { isFilterDisplay } = useFilterDisplay();

  return (
    <>
      {isSortDisplay && <SortBox />}
      {isFilterDisplay && <FilterBox />}
    </>
  );
};

export default PopupBoxes;

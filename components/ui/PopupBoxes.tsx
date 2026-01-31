"use client";

import FilterBox from "@/components/ui/FilterBox";
import SortBox from "@/components/ui/SortBox";
import useFilterDisplay from "@/hooks/useFilterDisplay";
import useSortDisplay from "@/hooks/useSortDisplay";

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

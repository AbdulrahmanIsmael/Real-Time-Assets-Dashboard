import { I_FilterDisplayContext } from "@/types/providers-types";
import { filterDisplayContext } from "@/components/providers/UI/FilterDisplay-provider";
import { useContext } from "react";

const useFilterDisplay = () => {
  const filterDisplay = useContext<I_FilterDisplayContext | null>(
    filterDisplayContext,
  );

  const toggleFilterDisplay = (value?: boolean) =>
    filterDisplay?.toggleFilterDisplay((prevState) => value || !prevState);
  return {
    isFilterDisplay: filterDisplay?.isFilterDisplay,
    toggleFilterDisplay,
  };
};

export default useFilterDisplay;

import { I_SortDisplayContext } from "@/types/providers-types";
import { sortDisplayContext } from "@/components/providers/UI/SortDisplay-provider";
import { useContext } from "react";

const useSortDisplay = () => {
  const sortDisplay = useContext<I_SortDisplayContext | null>(
    sortDisplayContext,
  );

  const toggleSortDisplay = (value?: boolean) =>
    sortDisplay?.toggleSortDisplay((prevState) => value || !prevState);
  return { isSortDisplay: sortDisplay?.isSortDisplay, toggleSortDisplay };
};

export default useSortDisplay;

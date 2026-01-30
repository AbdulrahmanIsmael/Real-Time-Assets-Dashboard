"use client";

import useFilterDisplay from "@/hooks/useFilterDisplay";
import useSortDisplay from "@/hooks/useSortDisplay";

const Overlay = () => {
  const { isSortDisplay } = useSortDisplay();
  const { isFilterDisplay } = useFilterDisplay();

  return (
    <>
      {(isSortDisplay || isFilterDisplay) && (
        <div className="fixed inset-0 h-full bg-black/20"></div>
      )}
    </>
  );
};

export default Overlay;

"use client";

import Cards from "@/components/ui/Cards";
import Table from "@/components/ui/Table";
import dynamic from "next/dynamic";
import useFilterDisplay from "@/hooks/useFilterDisplay";
import useSortDisplay from "@/hooks/useSortDisplay";

const FilterBox = dynamic(() => import("@/components/ui/FilterBox"));
const SortBox = dynamic(() => import("@/components/ui/SortBox"));

export default function Home() {
  const { isSortDisplay } = useSortDisplay();
  const { isFilterDisplay } = useFilterDisplay();
  return (
    <>
      <Cards />
      <Table />

      {isSortDisplay && <SortBox />}
      {isFilterDisplay && <FilterBox />}
    </>
  );
}

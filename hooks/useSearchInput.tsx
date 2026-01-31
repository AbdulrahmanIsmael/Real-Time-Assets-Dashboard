"use client";

import { I_SearchInputContext } from "@/types/providers-types";
import { revalidateAssetsTag } from "@/app/actions";
import { searchInputContext } from "@/components/providers/UI/SearchInput-provider";
import useBounce from "./useBounce";
import { useContext } from "react";

const useSearchInput = () => {
  const search = useContext<I_SearchInputContext | null>(searchInputContext);
  const bounce = useBounce(revalidateAssetsTag, 1000);

  const changeSearchValue = async (value: string) => {
    search?.setSearch(value);
    bounce();
  };

  return { search: search?.search, changeSearchValue };
};

export default useSearchInput;

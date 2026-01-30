"use client";

import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import darkFilterImg from "@/public/assets/icons/filter-dark.png";
import darkSearchImg from "@/public/assets/icons/search-dark.png";
import darkSortImg from "@/public/assets/icons/sort-dark.png";
import filterImg from "@/public/assets/icons/filter.png";
import searchImg from "@/public/assets/icons/search.png";
import sortImg from "@/public/assets/icons/sort.png";
import useFilterDisplay from "@/hooks/useFilterDisplay";
import useSortDisplay from "@/hooks/useSortDisplay";
import useTheme from "@/hooks/useTheme";

const Controls = () => {
  const { theme } = useTheme();
  const { toggleSortDisplay } = useSortDisplay();
  const { toggleFilterDisplay } = useFilterDisplay();

  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex items-stretch ">
        <label
          htmlFor="searchAsset"
          className="border border-r-0 border-borders px-2 py-1 rounded-l-md bg-navbar-bg flex items-center justify-center"
        >
          <Icon
            srcLight={searchImg}
            srcDark={darkSearchImg}
            isDark={theme}
            size={20}
            title="search for asset"
          />
        </label>
        <input
          type="search"
          name="searchAsset"
          id="searchAsset"
          placeholder="Search For Asset"
          title="Search For Asset"
          className="border border-l-0 border-borders py-1 text-lg rounded-r-md bg-navbar-bg focus:outline-0"
        />
      </div>

      <div className="flex items-stretch gap-3">
        <Button
          type="button"
          key="sorting"
          style="bg-text-primary text-background px-3 py-1 text-sm lg:text-lg font-medium rounded flex items-center gap-x-2"
          onClickHandler={() => toggleSortDisplay()}
        >
          <Icon
            srcLight={darkSortImg}
            srcDark={sortImg}
            isDark={theme}
            size={30}
            title="sort icon"
          />
          Sort By
        </Button>
        <Button
          type="button"
          key="filtering"
          style="bg-text-primary text-background px-3 py-1 text-sm lg:text-lg font-medium rounded flex items-center gap-x-2"
          onClickHandler={() => toggleFilterDisplay()}
        >
          <Icon
            srcLight={darkFilterImg}
            srcDark={filterImg}
            isDark={theme}
            size={20}
            title="filter icon"
          />
          Filter By
        </Button>
      </div>
    </section>
  );
};

export default Controls;

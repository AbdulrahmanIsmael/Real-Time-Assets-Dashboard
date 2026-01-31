"use client";

import { ChangeEvent, useEffect } from "react";

import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import darkFilterImg from "@/public/assets/icons/filter-dark.png";
import filterImg from "@/public/assets/icons/filter.png";
import { tableHeadings } from "@/lib/constants/table-constants";
import useFilter from "@/hooks/useFilter";
import useFilterDisplay from "@/hooks/useFilterDisplay";
import useTheme from "@/hooks/useTheme";

const FilterBox = () => {
  const { theme } = useTheme();

  const { isFilterDisplay, toggleFilterDisplay } = useFilterDisplay();
  const { filterAssets, filteredAssets } = useFilter();

  // handle document click event to close the popup box
  useEffect(() => {
    const closeSortHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(".filter-box")) {
        if (isFilterDisplay) toggleFilterDisplay(false);
      }
    };
    document.body.addEventListener("click", closeSortHandler);

    return () => document.body.removeEventListener("click", closeSortHandler);
  }, [isFilterDisplay, toggleFilterDisplay]);

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    filterAssets(value, isChecked ? "display" : "hide");
  };

  return (
    <section className="filter-box max-sm:w-screen absolute top-1/2 left-1/2 -translate-1/2 bg-navbar-bg text-text-primary z-10 px-15 py-10 rounded-2xl flex flex-col gap-y-5">
      <div className="flex items-center justify-between border-b border-borders pb-4">
        <h3 className="flex items-center gap-3 text-xl sm:text-3xl lg:text-5xl font-semibold">
          <Icon
            srcLight={filterImg}
            srcDark={darkFilterImg}
            isDark={theme}
            size={35}
            title="sort icon"
          />
          Filter
        </h3>

        <Button
          type="button"
          style="text-4xl text-red-600"
          onClickHandler={(e) => {
            e.stopPropagation();
            toggleFilterDisplay();
          }}
        >
          &#x2716;
        </Button>
      </div>

      <form className="flex flex-col items-center gap-10">
        <div className="flex flex-wrap items-center gap-y-10 gap-x-15">
          {tableHeadings.map((heading, index) => {
            if (heading === "Name" || heading === "name") return;
            return (
              <div className="flex gap-3 items-center" key={index}>
                <input
                  type="checkbox"
                  id={heading}
                  value={heading}
                  name="filter"
                  className="accent-primary"
                  checked={(filteredAssets as string[]).includes(heading)}
                  onChange={handleChangeFilter}
                />
                <label htmlFor={heading} className="text-2xl font-medium">
                  {heading}
                </label>
              </div>
            );
          })}
        </div>
      </form>
    </section>
  );
};

export default FilterBox;

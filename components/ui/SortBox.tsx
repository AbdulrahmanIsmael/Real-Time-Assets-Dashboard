"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { sortLabels, sortLevels } from "@/lib/constants/table-constants";

import darkSortImg from "@/public/assets/icons/sort-dark.png";
import dynamic from "next/dynamic";
import sortImg from "@/public/assets/icons/sort.png";
import useSortBy from "@/hooks/useSortBy";
import useSortDisplay from "@/hooks/useSortDisplay";
import useTheme from "@/hooks/useTheme";

const Button = dynamic(() => import("@/components/shared/Button"));
const Icon = dynamic(() => import("@/components/shared/Icon"));

const SortBox = () => {
  const { theme } = useTheme();

  const { isSortDisplay, toggleSortDisplay } = useSortDisplay();
  const { sortBy, setSortOrder } = useSortBy();

  const [sortItem, setSortItem] = useState<string>("");
  const [order, setOrder] = useState<string>("");

  const handleChangeSort = (e: ChangeEvent<HTMLInputElement>) => {
    setSortItem(e.target.value);
  };
  const handleChangeOrder = (e: ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value);
  };

  // handle document click event while displaying the box
  useEffect(() => {
    const closeSortHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest(".sort-box")) {
        if (isSortDisplay) toggleSortDisplay(false);
      }
    };
    document.body.addEventListener("click", closeSortHandler);

    return () => document.body.removeEventListener("click", closeSortHandler);
  }, [isSortDisplay, toggleSortDisplay]);

  return (
    <section className="sort-box max-sm:w-screen absolute top-1/2 left-1/2 -translate-1/2 bg-navbar-bg text-text-primary z-10 px-15 py-10 rounded-2xl flex flex-col gap-y-5">
      <div className="flex items-center w-full justify-between border-b border-borders pb-4">
        <h3 className="flex items-center gap-3 text-xl sm:text-3xl lg:text-5xl font-semibold">
          <Icon
            srcLight={sortImg}
            srcDark={darkSortImg}
            isDark={theme}
            size={50}
            title="sort icon"
          />
          Sort By
        </h3>

        <Button
          type="button"
          style="text-4xl text-red-600"
          onClickHandler={(e) => {
            e.stopPropagation();
            toggleSortDisplay();
          }}
        >
          &#x2716;
        </Button>
      </div>

      <form className="flex flex-col items-center gap-y-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className="text-3xl font-semibold">Sort By</h4>
          <div className="flex flex-wrap items-center gap-8">
            {sortLabels.map((label, index) => (
              <div className="flex gap-3 items-center" key={index}>
                <input
                  type="radio"
                  id={label}
                  name="sort"
                  value={label}
                  checked={sortItem === label}
                  onChange={handleChangeSort}
                  className="accent-primary"
                />
                <label htmlFor={label} className="text-2xl font-medium">
                  {label[0].toUpperCase() + label.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className="text-3xl font-semibold">Order</h4>
          {sortLevels.map((level, index) => (
            <div className="flex gap-3 items-center" key={index}>
              <input
                type="radio"
                id={level}
                name="order"
                value={level}
                checked={order === level}
                onChange={handleChangeOrder}
                className="accent-primary"
              />
              <label htmlFor={level} className="text-2xl font-medium">
                {level[0].toUpperCase() + level.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3">
          <Button
            type="button"
            buttonType="button"
            style="text-navbar-bg bg-text-primary text-xl lg:text-2xl font-medium border-2 border-borders rounded-md px-4 py-1"
            onClickHandler={() => {
              sortBy(sortItem);
              setSortOrder(order);
            }}
          >
            Sort
          </Button>

          <Button
            type="button"
            buttonType="reset"
            style="bg-navbar-bg text-text-primary text-xl lg:text-2xl font-medium border-2 border-borders rounded-md px-4 py-1"
          >
            clear
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SortBox;

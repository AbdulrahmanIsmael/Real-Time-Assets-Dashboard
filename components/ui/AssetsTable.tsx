"use client";

import {
  checkSearchAsset,
  getAssetValue,
  getKeyNameCapitalized,
  sortAssets,
} from "@/lib/utils/table-utils";

import { I_AssetsState } from "@/types/data-types";
import { tableHeadings } from "@/lib/constants/table-constants";
import useFilter from "@/hooks/useFilter";
import useSearchInput from "@/hooks/useSearchInput";
import useSortBy from "@/hooks/useSortBy";

const AssetsTable = ({ assets }: { assets: I_AssetsState }) => {
  const { sort, order } = useSortBy();
  const { filteredAssets } = useFilter();
  const { search } = useSearchInput();

  let assetsData = sortAssets(assets, sort, order);

  if (search) {
    assetsData = assetsData.filter((asset) => checkSearchAsset(search, asset));
  }

  const visibleHeadings =
    !filteredAssets || filteredAssets.length === 0
      ? tableHeadings
      : tableHeadings.filter((heading) => {
          if (heading === "name") return heading;
          return (filteredAssets as string[])?.includes(heading);
        });

  return (
    <table className="w-full text-center overflow-auto table-fixed">
      <thead>
        <tr className="bg-navbar-bg text-text-primary text-lg sm:text-xl lg:text-2xl font-bold">
          {visibleHeadings.map((h, i) => (
            <th className="py-3 px-1 border border-borders" key={i}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {assetsData.map((asset, index) => (
          <tr
            className="bg-navbar-bg text-text-primary text-sm sm:text-lg lg:text-xl font-medium"
            key={index}
          >
            {visibleHeadings.map((key) => (
              <td
                className={`py-4 px-2 border border-borders wrap-break-word`}
                key={`${key}-${asset.id}`}
              >
                {getAssetValue(
                  asset[getKeyNameCapitalized(key) as keyof typeof asset],
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetsTable;

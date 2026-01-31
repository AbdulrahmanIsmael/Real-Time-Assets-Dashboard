"use client";

import { I_Asset, I_AssetsState } from "@/types/data-types";

import { tableHeadings } from "@/lib/constants/table-constants";
import useSortBy from "@/hooks/useSortBy";

const AssetsTable = ({ assets }: { assets: I_AssetsState }) => {
  const { sort, order } = useSortBy();

  const assetsData = [...assets.assets];

  if (sort && order) {
    if (order === "ascending") {
      assetsData.sort(
        (a: I_Asset, b: I_Asset) =>
          Number(a[sort as keyof I_Asset]) - Number(b[sort as keyof I_Asset]),
      );
    } else if (order === "descending") {
      assetsData.sort(
        (a: I_Asset, b: I_Asset) =>
          Number(b[sort as keyof I_Asset]) - Number(a[sort as keyof I_Asset]),
      );
    }
  }

  return (
    <table className="w-full text-center overflow-auto table-fixed">
      <thead>
        <tr className="bg-navbar-bg text-text-primary text-lg sm:text-xl lg:text-2xl font-bold">
          {tableHeadings.map((h, i) => (
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
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {asset.name}
            </td>
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {asset.symbol}
            </td>
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {asset.type}
            </td>
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {new Intl.NumberFormat().format(asset.price)}
            </td>
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {asset.quantity}
            </td>
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {asset.sector}
            </td>
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 1,
              }).format(asset.volume)}
            </td>
            <td className="py-2 px-1 border border-borders wrap-break-word">
              {new Date(asset.lastUpdated).toDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetsTable;

import { cacheLife, cacheTag } from "next/cache";

import Controls from "@/components/ui/Controls";
import { I_AssetsState } from "@/types/data-types";
import { tableHeadings } from "@/lib/constants/table-constants";

const Table = async () => {
  "use cache";
  cacheTag("assets", "table");
  cacheLife({ stale: 3600, revalidate: 86400, expire: 86400 });

  const dataFetched = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL || "http://localhost:3000"}/api/assets`,
  );

  const assets: I_AssetsState = await dataFetched.json();

  return (
    <section className="my-10 flex flex-col items-center gap-y-3">
      <Controls />
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
          {assets.assets.map((asset, index) => (
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
                {asset.price}
              </td>
              <td className="py-2 px-1 border border-borders wrap-break-word">
                {asset.sector}
              </td>
              <td className="py-2 px-1 border border-borders wrap-break-word">
                {asset.volume}
              </td>
              <td className="py-2 px-1 border border-borders wrap-break-word">
                {asset.lastUpdated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;

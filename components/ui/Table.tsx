import { cacheLife, cacheTag } from "next/cache";

import AssetsTable from "./AssetsTable";
import Controls from "@/components/ui/Controls";
import { I_AssetsState } from "@/types/data-types";

const Table = async () => {
  "use cache";
  cacheTag("assets", "table");
  cacheLife({ stale: 3600, revalidate: 86400, expire: 86400 });

  const dataFetched = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/assets`,
  );

  const assets: I_AssetsState = await dataFetched.json();

  return (
    <section className="my-10 flex flex-col items-center gap-y-3">
      <Controls />
      <AssetsTable assets={assets} />
    </section>
  );
};

export default Table;

// import { I_AssetsState } from "@/types/data-types";
import { cacheLife, cacheTag } from "next/cache";

import AssetsTable from "./AssetsTable";
import Controls from "@/components/ui/Controls";
import { getAssets } from "@/lib/utils/assets-utils";

const Table = async () => {
  "use cache";
  cacheTag("assets", "table");
  cacheLife({ stale: 3600, revalidate: 86400, expire: 86400 });

  //? THIS PART IS USED AFTER DEPLOYING THE WEBSITE TO USE THE BASE URL
  // const dataFetched = await fetch("https://www.url.com/api/assets", {
  //   cache: "force-cache",
  // });
  // if (!dataFetched.ok) throw new Error("Something Went Wrong");
  // const assets: I_AssetsState = await getAssets.json();

  const assets = await getAssets();

  return (
    <section className="my-10 flex flex-col items-center gap-y-3">
      <Controls />
      <AssetsTable assets={assets} />
    </section>
  );
};

export default Table;

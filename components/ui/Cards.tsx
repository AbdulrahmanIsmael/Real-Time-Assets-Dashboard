import { cacheLife, cacheTag } from "next/cache";

import Card from "@/components/shared/Card";
import { I_Cards } from "@/types/data-types";
import assetsImg from "@/public/assets/icons/assets.png";
import bestImg from "@/public/assets/icons/best.png";
import { getAssetValue } from "@/lib/utils/table-utils";
import profitImg from "@/public/assets/icons/profit.png";
import valueImg from "@/public/assets/icons/value.png";

const Cards = async () => {
  "use cache";
  cacheTag("cards");
  cacheLife({ stale: 3600, revalidate: 86400, expire: 86400 });

  const dataFetched = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL || "http://localhost:3000"}/api/cards`,
    { cache: "force-cache" },
  );

  const cardsContent: I_Cards = await dataFetched.json();

  const profitOrLoss = +cardsContent.totalProfitOrLoss >= 0;
  return (
    <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end gap-5">
      <Card
        img={valueImg}
        title="Total Portfolio Value"
        value={getAssetValue(cardsContent.totalValue)}
        color="text-green-700"
      />
      <Card
        img={profitImg}
        title="Total Profit / Loss"
        value={getAssetValue(cardsContent.totalProfitOrLoss)}
        color={profitOrLoss ? "text-green-700" : "text-red-700"}
        size={45}
      />
      <Card
        img={assetsImg}
        title="Number Of Assets"
        value={cardsContent.numberofAssets}
      />
      <Card
        img={bestImg}
        title="Most Performing Asset"
        value={`${(cardsContent.bestAsset.performance * 100).toFixed(2)}%`}
        result={cardsContent.bestAsset.name}
        color="text-green-700"
      />
    </section>
  );
};

export default Cards;

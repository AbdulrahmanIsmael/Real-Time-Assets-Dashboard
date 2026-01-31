import { I_Asset } from "@/types/data-types";
import assets from "@/lib/db/assets.json";

export async function GET() {
  const assetsArr = assets.assets;
  const numberofAssets = assetsArr.length;
  const totalValue = checkTotalValue(assetsArr);
  const totalProfitOrLoss = checkTotalProfitOrLoss(assetsArr);
  const bestAsset = checkBestAsset(assetsArr);

  return Response.json({
    numberofAssets,
    totalValue,
    totalProfitOrLoss,
    bestAsset,
  });
}

function checkTotalValue(assets: I_Asset[]): number {
  return assets.reduce(
    (total, asset) => total + asset.price * asset.quantity,
    0,
  );
}

function checkTotalProfitOrLoss(assets: I_Asset[]): number {
  return assets.reduce(
    (total, asset) => total + (asset.price - asset.buyPrice) * asset.quantity,
    0,
  );
}

function checkBestAsset(assets: I_Asset[]): {
  name: string;
  performance: number;
} {
  const initialBestAsset = {
    name: "",
    performance: 0,
  };
  return assets.reduce((best, asset) => {
    const performance = (asset.price - asset.buyPrice) / asset.buyPrice;
    if (performance > best.performance) {
      return {
        name: asset.name,
        performance,
      };
    } else {
      return best;
    }
  }, initialBestAsset);
}

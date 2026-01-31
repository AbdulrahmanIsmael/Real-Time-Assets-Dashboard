export interface I_Asset {
  id: string;
  name: string;
  symbol: string;
  type: string;
  sector: string;
  quantity: number;
  buyPrice: number;
  price: number;
  volume: number;
  lastUpdated: string;
}

export interface I_AssetsState {
  assets: I_Asset[];
}

type T_BestAsset = { name: string; performance: number };
export interface I_Cards {
  numberofAssets: number;
  totalValue: number;
  totalProfitOrLoss: number;
  bestAsset: T_BestAsset;
}

export interface I_Asset {
  id: string;
  name: string;
  symbol: string;
  type: string;
  sector: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
  currency: string;
  volume: number;
  lastUpdated: string;
}

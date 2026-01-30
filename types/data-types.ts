export interface I_Asset {
  id: string;
  name: string;
  symbol: string;
  type: string;
  sector: string;
  quantity: number;
  price: number;
  volume: number;
  lastUpdated: string;
}

export interface I_AssetsState {
  assets: I_Asset[];
}

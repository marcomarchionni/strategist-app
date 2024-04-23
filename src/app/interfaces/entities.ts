export interface Trade {
  id: number;
  date: Date;
  symbol: string;
  strategy: string | null;
  assetClass: string;
  quantity: number;
  price: number;
}

export interface Position {
  id: number;
  reportDate: Date;
  symbol: string;
  assetClass: string;
  strategy: string | null;
  quantity: number;
  buyPrice: number;
  marketPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPct: number;
}

export interface Dividend {
  id: number;
  date: Date;
  strategy: string | null;
  symbol: string;
  amount: number;
}

export interface Strategy {
  id: number;
  name: string;
  trades: Trade[];
  positions: Position[];
  dividends: Dividend[];
}

export interface Portfolio {
  id: number;
  created: Date;
  name: string;
  description?: string;
  strategies?: Strategy[];
}

export interface ShortStrategy {
  id: number;
  name: string;
}

export interface TradesTableData {
  result: Trade[];
  count: number;
}

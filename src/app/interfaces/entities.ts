export interface Trade {
  id: number;
  date: Date;
  symbol: string;
  strategy: string | null;
  quantity: number;
  price: number;
}

export interface Position {
  id: number;
  reportDate: Date;
  symbol: string;
  strategy: string | null;
  quantity: number;
  price: number;
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
  name: string;
  strategies: Strategy[];
}

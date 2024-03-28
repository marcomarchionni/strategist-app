export interface Trade {
  date: Date;
  symbol: string;
  strategy: string | null;
  quantity: number;
  price: number;
}

export interface Trade {
  id: number;
  date: Date;
  symbol: string;
  strategy: string | null;
  quantity: number;
  price: number;
}

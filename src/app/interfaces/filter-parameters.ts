enum AssetClass {
  OPT = 'Option',
  FUT = 'Future',
  STK = 'Stock',
  CASH = 'Cash',
}

export interface TradeFind {
  after?: Date;
  before?: Date;
  symbol?: string;
  assetClass?: AssetClass;
  hasStrategy?: boolean;
}

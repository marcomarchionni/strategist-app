import { Injectable } from '@angular/core';
import { Trade } from '../../interfaces/entities';
import { TradeFind } from '../../interfaces/filter-parameters';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  trades: Trade[] = [
    {
      id: 1,
      date: new Date('01/01/2019'),
      symbol: 'AAPL',
      strategy: null,
      quantity: 100,
      price: 150.0,
    },
    {
      id: 2,
      date: new Date('11/1/2020'),
      symbol: 'GOOGL',
      strategy: null,
      quantity: 50,
      price: 800.0,
    },
    {
      id: 3,
      date: new Date('1/30/2021'),
      symbol: 'MSFT',
      strategy: 'MSFT long',
      quantity: 75,
      price: 75.0,
    },
    {
      id: 4,
      date: new Date('1/25/2023'),
      symbol: 'AMZN',
      strategy: 'AMZN long',
      quantity: 25,
      price: 1000.0,
    },
  ];

  fetchTrades(tradeFind?: TradeFind): Observable<Trade[]> {
    let tradesToReturn = this.trades;

    if (tradeFind) {
      tradesToReturn = this.filterTrades(this.trades, tradeFind);
    }
    return of(tradesToReturn || []);
  }

  private filterTrades(trades: Trade[], tradeFind: TradeFind): Trade[] {
    return trades.filter((trade) => {
      return (
        (!tradeFind.after || trade.date >= tradeFind.after) &&
        (!tradeFind.before || trade.date <= tradeFind.before) &&
        (!tradeFind.symbol || trade.symbol.includes(tradeFind.symbol)) &&
        (!tradeFind.assetClass || trade.symbol === tradeFind.assetClass) &&
        (tradeFind.hasStrategy === null ||
          (tradeFind.hasStrategy && trade.strategy !== null) ||
          (!tradeFind.hasStrategy && trade.strategy === null))
      );
    });
  }

  updateStrategy(trade: Trade) {
    this.trades
      .filter((t) => t.id === trade.id)
      .forEach((t) => {
        if (trade.strategy === '') {
          trade.strategy = null;
        } else {
          t.strategy = trade.strategy;
        }
        console.log(
          `Updated strategy for trade with id: ${t.id} to ${t.strategy}`
        );
        console.log(this.trades);
      });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Position } from '../../interfaces/entities';
import { PositionFind } from '../../interfaces/filter-parameters';
import { DataManager } from '@syncfusion/ej2-data';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  positions: Position[] = [
    {
      id: 1,
      reportDate: new Date('01/01/2019'),
      strategy: null,
      symbol: 'AAPL',
      assetClass: 'STK',
      quantity: 100,
      price: 150.0,
    },
    {
      id: 2,
      reportDate: new Date('11/1/2020'),
      strategy: null,
      symbol: 'GOOGL',
      assetClass: 'STK',
      quantity: 50,
      price: 800.0,
    },
    {
      id: 3,
      reportDate: new Date('1/30/2021'),
      strategy: 'MSFT long',
      symbol: 'MSFT',
      assetClass: 'STK',
      quantity: 75,
      price: 75.0,
    },
    {
      id: 4,
      reportDate: new Date('1/25/2023'),
      strategy: 'AMZN long',
      symbol: 'AMZN',
      assetClass: 'STK',
      quantity: 25,
      price: 1000.0,
    },
  ];
  constructor() {}
  fetchPositions(filter?: PositionFind): Observable<Position[]> {
    let postionsToReturn = this.positions;

    if (filter) {
      postionsToReturn = this.filterPositions(this.positions, filter);
    }

    return of(postionsToReturn || []);
  }

  private filterPositions(
    positions: Position[],
    filter: PositionFind
  ): Position[] {
    return positions.filter((position) => {
      return (
        (!filter.symbol || position.symbol.includes(filter.symbol)) &&
        (!filter.assetClass || position.assetClass === filter.assetClass) &&
        (!filter.hasStrategy ||
          (position.strategy !== null) === filter.hasStrategy)
      );
    });
  }

  handleStrategyUpdate($event: { position: Position }) {
    throw new Error('Method not implemented.');
  }

  updateStrategy(position: Position) {
    console.log('Position updated');
  }

  getPositions() {
    return new DataManager(this.positions);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Position } from '../../interfaces/entities';
import { PositionFind } from '../../interfaces/filter-parameters';
import { DataManager } from '@syncfusion/ej2-data';
import { positions } from '../../data/positions';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  constructor() {}
  fetchPositions(filter?: PositionFind): Observable<Position[]> {
    let postionsToReturn = positions;

    if (filter) {
      postionsToReturn = this.filterPositions(positions, filter);
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
    return new DataManager(positions);
  }
}

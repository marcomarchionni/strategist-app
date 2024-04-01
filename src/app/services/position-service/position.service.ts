import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Position } from '../../interfaces/entities';
import { PositionFind } from '../../interfaces/filter-parameters';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  constructor() {}
  fetchPositions(filter?: PositionFind): Observable<Position[]> {
    return of([]);
  }

  updateStrategy(position: Position) {
    console.log('Position updated');
  }
}

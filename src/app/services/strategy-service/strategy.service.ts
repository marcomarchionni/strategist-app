import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Strategy, ShortStrategy } from '../../interfaces/entities';

@Injectable({
  providedIn: 'root',
})
export class StrategyService {
  constructor() {}

  shortStrategies: ShortStrategy[] = [
    { id: 1, name: 'MSFT short' },
    { id: 2, name: 'MSFT long' },
    { id: 3, name: 'AMZN long' },
    { id: 4, name: 'AAPL long' },
    { id: 5, name: 'GOOGL long' },
  ];

  fetchShortStrategies() {
    return of(this.shortStrategies || []);
  }

  getShortStrategies(): ShortStrategy[] {
    return this.shortStrategies;
  }
}

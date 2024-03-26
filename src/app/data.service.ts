import { Injectable } from '@angular/core';
import { Record } from './interfaces/record.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getRecords(): Record[] {
    return [
      { symbol: 'AAPL', quantity: 100, price: 150.0 },
      { symbol: 'GOOGL', quantity: 50, price: 800.0 },
      { symbol: 'MSFT', quantity: 75, price: 75.0 },
      { symbol: 'AMZN', quantity: 25, price: 1000.0 },
    ];
  }
}

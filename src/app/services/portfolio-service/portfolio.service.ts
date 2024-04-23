import { Injectable } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { portfolios } from '../../data/portfolios';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}

  getPortfolios() {
    return new DataManager(portfolios);
  }
}

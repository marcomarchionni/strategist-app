import { Injectable } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { portfolios } from '../../data/portfolios';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}

  url = 'http://localhost:8080/api/v1/portfolios';

  getPortfolios() {
    return new DataManager({
      url: this.url,
    });
  }
}

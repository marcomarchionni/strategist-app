import { Component } from '@angular/core';
import { PortfolioTableComponent } from '../portfolio-table/portfolio-table.component';
import { PortfolioService } from '../../../services/portfolio-service/portfolio.service';
import { DataManager } from '@syncfusion/ej2-data';
import { Button } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-portfolio-view',
  standalone: true,
  imports: [PortfolioTableComponent],
  templateUrl: './portfolio-view.component.html',
  styleUrl: './portfolio-view.component.scss',
})
export class PortfolioViewComponent {
  portfolios: DataManager = this.portfolioService.getPortfolios();

  constructor(private portfolioService: PortfolioService) {}

  checkCors() {
    // I want to make a request to the server to check if CORS is enabled
    const url = 'http://localhost:8080/api/v1/portfolios/';
    fetch(url, { method: 'GET' })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log('Data: ', data);
      })
      .catch((error) => {
        console.log('CORS not enabled');
      });
  }
}

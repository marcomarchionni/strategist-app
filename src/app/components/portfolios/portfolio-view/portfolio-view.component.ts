import { Component } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { PortfolioService } from '../../../services/portfolio-service/portfolio.service';
import { PortfolioTableComponent } from '../portfolio-table/portfolio-table.component';

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
}

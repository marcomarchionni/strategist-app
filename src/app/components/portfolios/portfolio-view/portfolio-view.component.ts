import { Component } from '@angular/core';
import { PortfolioTableComponent } from '../portfolio-table/portfolio-table.component';

@Component({
  selector: 'app-portfolio-view',
  standalone: true,
  imports: [PortfolioTableComponent],
  templateUrl: './portfolio-view.component.html',
  styleUrl: './portfolio-view.component.scss',
})
export class PortfolioViewComponent {}

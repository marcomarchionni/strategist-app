import { Component, OnInit } from '@angular/core';
import { PositionTableComponent } from '../position-table/PositionTableComponent';
import { PositionService } from '../../../services/position-service/position.service';
import { StrategyService } from '../../../services/strategy-service/strategy.service';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-position-view',
  standalone: true,
  imports: [PositionTableComponent],
  templateUrl: './position-view.component.html',
  styleUrl: './position-view.component.scss',
})
export class PositionViewComponent implements OnInit {
  positions: DataManager = new DataManager();
  strategies: DataManager = new DataManager();

  constructor(
    private positionService: PositionService,
    private strategyService: StrategyService
  ) {}

  ngOnInit(): void {
    this.positions = this.positionService.getPositions();
    this.strategies = this.strategyService.getShortStrategies();
  }
}

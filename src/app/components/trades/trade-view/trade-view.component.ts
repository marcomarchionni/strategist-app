import { Component } from '@angular/core';
import { TradeService } from '../../../services/trade-service/trade.service';

import { TradeTableComponent } from '../trade-table/trade-table.component';
import { StrategyService } from '../../../services/strategy-service/strategy.service';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-trade-view',
  standalone: true,
  templateUrl: './trade-view.component.html',
  styleUrl: './trade-view.component.scss',
  providers: [],
  imports: [TradeTableComponent],
})
export class TradeViewComponent {
  tableData: DataManager = this.tradeService.getTrades();
  strategies: DataManager = this.strategyService.getShortStrategies();

  constructor(
    private tradeService: TradeService,
    private strategyService: StrategyService
  ) {}
}

import { Component } from '@angular/core';
import { TradeService } from '../../../services/trade-service/trade.service';
import { TradeFilterComponent as TradeFilterComponent } from '../trade-filter/trade-filter.component';
import { TradeFind } from '../../../interfaces/filter-parameters';
import {
  ShortStrategy,
  Trade,
  TradesTableData,
} from '../../../interfaces/entities';
import { Observable, tap } from 'rxjs';
import { TradeTableComponent } from '../trade-table/trade-table.component';
import { StrategyService } from '../../../services/strategy-service/strategy.service';

@Component({
  selector: 'app-trade-view',
  standalone: true,
  templateUrl: './trade-view.component.html',
  styleUrl: './trade-view.component.scss',
  providers: [],
  imports: [TradeFilterComponent, TradeTableComponent],
})
export class TradeViewComponent {
  tableData$: Observable<TradesTableData> = this.tradeService
    .fetchTradesTableData()
    .pipe(tap(console.log));
  strategies$: Observable<ShortStrategy[]> =
    this.strategyService.fetchShortStrategies();

  constructor(
    private tradeService: TradeService,
    private strategyService: StrategyService
  ) {}

  handleFormSubmit(tradeFind: TradeFind) {
    console.log(tradeFind);
    this.tableData$ = this.tradeService.fetchTradesTableData(tradeFind);
  }

  handleStrategyUpdate({ trade }: { trade: Trade }) {
    this.tradeService.updateStrategy(trade);
  }
}

import { Component } from '@angular/core';
import { TradeService } from '../../../services/trade-service/trade.service';
import { TradeFilterComponent as TradeFilterComponent } from '../trade-filter/trade-filter.component';
import { TradeFind } from '../../../interfaces/filter-parameters';
import { Trade } from '../../../interfaces/entities';
import { Observable } from 'rxjs';
import { TradeTableComponent } from '../trade-table/trade-table.component';

@Component({
  selector: 'app-trade-view',
  standalone: true,
  templateUrl: './trade-view.component.html',
  styleUrl: './trade-view.component.scss',
  providers: [],
  imports: [TradeFilterComponent, TradeTableComponent],
})
export class TradeViewComponent {
  tableData$: Observable<Trade[]> = this.tradeService.fetchTrades();

  constructor(private tradeService: TradeService) {}

  handleFormSubmit(tradeFind: TradeFind) {
    console.log(tradeFind);
    this.tableData$ = this.tradeService.fetchTrades(tradeFind);
  }

  handleStrategyUpdate({ trade }: { trade: Trade }) {
    this.tradeService.updateStrategy(trade);
  }
}

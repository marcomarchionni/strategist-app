import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { FilterComponent } from '../trade-filter/trade-filter.component';
import { TradeFind } from '../../interfaces/filter-parameters';
import { Trade } from '../../interfaces/entities';
import { Observable } from 'rxjs';
import { TradeTableComponent } from '../trade-table/trade-table.component';

@Component({
  selector: 'app-trade-view',
  standalone: true,
  templateUrl: './trade-view.component.html',
  styleUrl: './trade-view.component.scss',
  providers: [],
  imports: [FilterComponent, TradeTableComponent],
})
export class TradeViewComponent {
  tableData$: Observable<Trade[]> = this.dataService.fetchTrades();

  constructor(private dataService: DataService) {}

  handleFormSubmit(tradeFind: TradeFind) {
    console.log(tradeFind);
    this.tableData$ = this.dataService.fetchTrades(tradeFind);
  }

  handleStrategyUpdate({ trade }: { trade: Trade }) {
    this.dataService.updateStrategy(trade);
  }
}

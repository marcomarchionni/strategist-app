import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade, TradesTableData } from '../../../interfaces/entities';
import { CommonModule } from '@angular/common';
import {
  GridModule,
  EditService,
  ToolbarService,
  PageService,
  CommandColumnService,
  IEditCell,
  EditSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { TradeService } from '../../../services/trade-service/trade.service';

@Component({
  selector: 'app-trade-table',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './trade-table.component.html',
  styleUrl: './trade-table.component.scss',
  providers: [EditService, ToolbarService, PageService, CommandColumnService],
})
export class TradeTableComponent {
  @Input() tableData$ = new Observable<TradesTableData>();
  constructor(private tradesService: TradeService) {}
  data$ = this.tradesService.fetchTrades();
  // @Output() strategyUpdated = new EventEmitter<{ trade: Trade }>();

  public strategies: Object[] = [
    { id: 1, name: 'Select strategy' },
    { id: 2, name: 'MSFT long' },
    { id: 3, name: 'AMZN long' },
    { id: 4, name: 'AAPL long' },
    { id: 5, name: 'GOOGL long' },
  ];

  public strategyParams: IEditCell = {
    params: {
      dataSource: new DataManager(this.strategies),
      fields: { value: 'name', text: 'name' },
      query: new Query(),
      actionComplete: () => false,
    },
  };

  public editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: false,
    allowDeleting: false,
    mode: 'Batch',
  };

  public toolbar: ToolbarItems[] = [
    'Add',
    'Edit',
    'Delete',
    'Update',
    'Cancel',
  ];

  // updateStrategy(trade: Trade) {
  //   this.strategyUpdated.emit({ trade });
  // }

  onStrategyUpdate($event: any) {
    console.log($event);
  }
}

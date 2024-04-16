import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-trade-table',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './trade-table.component.html',
  styleUrl: './trade-table.component.scss',
  providers: [EditService, ToolbarService, PageService, CommandColumnService],
})
export class TradeTableComponent implements OnInit {
  @Input() tableData!: DataManager;
  @Input() strategies!: DataManager;
  public strategyParams!: IEditCell;

  ngOnInit(): void {
    this.updateStrategyParams();
  }

  updateStrategyParams() {
    this.strategyParams = {
      params: {
        dataSource: this.strategies,
        fields: { value: 'name', text: 'name' },
        query: new Query(),
        actionComplete: () => false,
      },
    };
  }

  public editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: false,
    allowDeleting: false,
    mode: 'Batch',
  };

  public toolbar: ToolbarItems[] = ['Edit', 'Update', 'Cancel'];

  onStrategyUpdate($event: any) {
    console.log($event);
  }
}

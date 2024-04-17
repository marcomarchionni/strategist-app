import { Component, Input, OnInit } from '@angular/core';
import { DataManager, Query } from '@syncfusion/ej2-data';
import {
  CommandColumnService,
  EditService,
  GridModule,
  ToolbarService,
  PageService,
  IEditCell,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [GridModule],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.scss',
  providers: [EditService, ToolbarService, PageService, CommandColumnService],
})
export class PositionTableComponent implements OnInit {
  @Input() positions?: DataManager;
  @Input() strategies?: DataManager;

  public strategyParams?: IEditCell;

  public editSettings = {
    allowEditing: true,
    allowAdding: false,
    allowDeleting: false,
    mode: 'Batch',
  };

  public toolbar = ['Update', 'Cancel'];

  ngOnInit(): void {
    console.log(this.strategies);
    this.strategyParams = {
      params: {
        dataSource: this.strategies,
        fields: { value: 'name', text: 'name' },
        query: new Query(),
        actionComplete: ($event) => console.log('ActionComplete', $event),
      },
    };
  }
}

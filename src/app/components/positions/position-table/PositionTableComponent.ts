import { Component, Input, OnInit } from '@angular/core';
import { DataManager, Query } from '@syncfusion/ej2-data';
import {
  CommandColumnService,
  EditService,
  GridModule,
  ToolbarService,
  PageService,
  FilterService,
  IEditCell,
  FilterSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import {
  MultiSelectModule,
  DropDownListAllModule,
  CheckBoxSelectionService,
} from '@syncfusion/ej2-angular-dropdowns';
import { CheckBox, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [
    GridModule,
    MultiSelectModule,
    DropDownListAllModule,
    CheckBoxModule,
  ],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.scss',
  providers: [
    EditService,
    ToolbarService,
    PageService,
    FilterService,
    CommandColumnService,
    CheckBoxSelectionService,
  ],
})
export class PositionTableComponent implements OnInit {
  @Input() positions?: DataManager;
  @Input() strategies?: DataManager;

  public strategyParams?: IEditCell;
  public filterSettings?: FilterSettingsModel;

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
        actionComplete: () => false,
      },
    };
    this.filterSettings = { type: 'Menu' };
  }
}

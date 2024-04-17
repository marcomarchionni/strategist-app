import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManager, Query } from '@syncfusion/ej2-data';
import {
  CommandColumnService,
  EditService,
  GridModule,
  ToolbarService,
  PageService,
  IEditCell,
  EditSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [GridModule, CommonModule],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.scss',
  providers: [EditService, ToolbarService, PageService, CommandColumnService],
})
export class PositionTableComponent {
  @Input() strategies?: DataManager;
  @Input() positions?: DataManager;
  public strategyParams: IEditCell = {};

  public editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: false,
    allowDeleting: false,
    mode: 'Batch',
  };

  public toolbar: ToolbarItems[] = ['Update', 'Cancel'];
}

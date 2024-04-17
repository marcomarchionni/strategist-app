import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  GridComponent,
  EditEventArgs,
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
  @Input() tableData?: DataManager;
  @Input() strategies?: DataManager;
  @ViewChild('grid')
  public grid?: GridComponent;
  public strategyParams?: IEditCell;
  public editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: false,
    allowDeleting: false,
    mode: 'Batch',
  };
  public toolbar: ToolbarItems[] = ['Update', 'Cancel'];
  private lastClickedCellInfo: {
    index: number;
    colIndex: number;
    field?: string;
  } | null = null;

  ngOnInit(): void {
    this.strategyParams = {
      params: {
        dataSource: this.strategies,
        fields: { value: 'name', text: 'name' },
        query: new Query(),
        actionComplete: ($event) => {
          console.log('ActionComplete', $event);
          this.showDropDown();
        },
      },
    };
  }

  onClick(args: any) {
    console.log('Click', args);
    if (args?.target?.classList?.contains('e-rowcell')) {
      var index = parseInt(args.target.getAttribute('Index'));
      var colIndex = parseInt(args.target.getAttribute('aria-colindex')) - 1;
      var field = (this.grid as GridComponent).getColumns()[colIndex].field;
      console.log('Index', index, 'ColIndex', colIndex, 'Field', field);
      if (field === 'strategy') {
        this.lastClickedCellInfo = { index, colIndex, field };
        console.log('Set LastClickedCellInfo', this.lastClickedCellInfo);
        (this.grid as GridComponent).editModule.editCell(index, field);
      } else {
        console.log('Field is not strategy');
      }
    }
  }

  showDropDown() {
    if (this.lastClickedCellInfo) {
      console.log('LastClickedCellInfo', this.lastClickedCellInfo);
      const cell = this.grid?.getCellFromIndex(
        this.lastClickedCellInfo?.index,
        this.lastClickedCellInfo?.colIndex
      );
      console.log('Cell', cell);
      const dropDownElement = cell?.querySelector('.e-dropdownlist');
      console.log('DropDownElement', dropDownElement);
      if (dropDownElement) {
        const dropDownInstance = (dropDownElement as any).ej2_instances[0];
        dropDownInstance.showPopup();
      }
    }
    this.lastClickedCellInfo = null;
  }
}

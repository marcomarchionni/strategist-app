import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  BeforeBatchAddArgs,
  CommandColumnService,
  EditService,
  EditSettingsModel,
  GridModule,
  PageService,
  PageSettingsModel,
  QueryCellInfoEventArgs,
  SortService,
  ToolbarItems,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-portfolio-table',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './portfolio-table.component.html',
  styleUrl: './portfolio-table.component.scss',
  providers: [
    EditService,
    ToolbarService,
    PageService,
    CommandColumnService,
    SortService,
  ],
})
export class PortfolioTableComponent {
  @Input() portfolios?: DataManager;

  public editSettings: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    showConfirmDialog: false,
    mode: 'Batch',
  };

  public toolbar: ToolbarItems[] = ['Add', 'Update', 'Delete', 'Cancel'];
  public nameRules = { required: true, minLength: 3, maxLength: 30 };
  public pageSettings: PageSettingsModel = { pageSize: 10 }; // Set the default page size
  public sortSettings = {
    columns: [{ field: 'name', direction: 'Ascending' }],
  };

  queryCellInfo(args: QueryCellInfoEventArgs) {
    if (args?.column?.field === 'name') {
      const cellElement = args.cell as HTMLElement;
      cellElement.style.fontWeight = 'bold';
    }
  }

  beforeBatchAdd(args: BeforeBatchAddArgs) {
    console.log('Before batch add triggered', args);
    const today = new Date().toISOString().substring(0, 10);
    console.log('Today', today);
    if (args.defaultData) {
      (args.defaultData as { createdAt: string })['createdAt'] = today;
      console.log('Created date populated BeforeBatchAdd', args);
    }
  }
}

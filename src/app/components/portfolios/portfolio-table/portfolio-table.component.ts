import { Component, Input } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import {
  GridModule,
  EditService,
  ToolbarService,
  PageService,
  CommandColumnService,
  EditSettingsModel,
  ToolbarItems,
  BeforeBatchAddArgs,
  QueryCellInfoEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-table',
  standalone: true,
  imports: [CommonModule, GridModule],
  templateUrl: './portfolio-table.component.html',
  styleUrl: './portfolio-table.component.scss',
  providers: [EditService, ToolbarService, PageService, CommandColumnService],
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

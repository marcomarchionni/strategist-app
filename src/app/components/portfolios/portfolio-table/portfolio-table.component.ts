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
    mode: 'Batch',
  };

  public toolbar: ToolbarItems[] = ['Add', 'Update', 'Delete', 'Cancel'];
}

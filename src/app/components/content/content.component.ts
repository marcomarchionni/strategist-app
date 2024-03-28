import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Record } from '../../interfaces/record.interface';
import { MatTableModule } from '@angular/material/table';
import { FilterComponent } from '../filter/filter.component';
import { TradeFind } from '../../interfaces/filter-parameters';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  imports: [MatTableModule, FilterComponent],
})
export class ContentComponent {
  dataSource: Record[] = [];
  displayedColumns: string[] = ['symbol', 'quantity', 'price'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSource = this.dataService.getRecords();
    console.log(this.dataSource);
  }

  handleFormSubmit(tradeFind: TradeFind) {
    console.log(tradeFind);
  }
}

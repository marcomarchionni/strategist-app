import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { MatTableModule } from '@angular/material/table';
import { FilterComponent } from '../filter/filter.component';
import { TradeFind } from '../../interfaces/filter-parameters';
import { Trade } from '../../interfaces/entities';
import { DatePipe } from '@angular/common';
import { Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  imports: [MatTableModule, FilterComponent, DatePipe],
  providers: [],
})
export class ContentComponent {
  tableData$: Observable<Trade[]> = this.dataService
    .fetchTrades()
    .pipe(startWith([]));
  displayedColumns: string[] = [
    'date',
    'symbol',
    'strategy',
    'quantity',
    'price',
  ];

  constructor(private dataService: DataService) {}

  handleFormSubmit(tradeFind: TradeFind) {
    console.log(tradeFind);
    this.tableData$ = this.dataService.fetchTrades(tradeFind);
  }
}

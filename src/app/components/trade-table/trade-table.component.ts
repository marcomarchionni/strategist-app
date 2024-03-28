import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from '../../interfaces/entities';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trade-table',
  standalone: true,
  imports: [MatTableModule, DatePipe],
  templateUrl: './trade-table.component.html',
  styleUrl: './trade-table.component.scss',
})
export class TradeTableComponent {
  @Input() tableData$: Observable<Trade[]> = new Observable<Trade[]>();
  displayedColumns = ['date', 'symbol', 'strategy', 'quantity', 'price'];
}

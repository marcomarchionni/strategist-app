import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Trade } from '../../interfaces/entities';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trade-table',
  standalone: true,
  imports: [MatTableModule, DatePipe, MatSelectModule, CommonModule],
  templateUrl: './trade-table.component.html',
  styleUrl: './trade-table.component.scss',
})
export class TradeTableComponent {
  @Input() tableData$: Observable<Trade[]> = new Observable<Trade[]>();
  @Output() strategyUpdated = new EventEmitter<{ trade: Trade }>();
  displayedColumns = ['date', 'symbol', 'strategy', 'quantity', 'price'];
  strategies: string[] = ['MSFT long', 'AMZN long', 'AAPL long', 'GOOGL long'];

  updateStrategy(trade: Trade) {
    this.strategyUpdated.emit({ trade });
  }
}

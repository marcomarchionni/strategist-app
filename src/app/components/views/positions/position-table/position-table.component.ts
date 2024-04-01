import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../../../../interfaces/entities';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [MatTableModule, MatSelectModule, CommonModule],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.scss',
})
export class PositionTableComponent {
  @Input() tableData$: Observable<Position[]> = new Observable<Position[]>();
  @Output() strategyUpdated = new EventEmitter<{ position: Position }>();
  displayedColumns = ['symbol', 'assetClass', 'quantity', 'price'];
  strategies: string[] = [
    '',
    'MSFT long',
    'AMZN long',
    'AAPL long',
    'GOOGL long',
  ];

  updateStrategy(position: Position) {
    this.strategyUpdated.emit({ position });
  }
}

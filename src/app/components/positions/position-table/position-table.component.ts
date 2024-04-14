import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Position } from '../../../interfaces/entities';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-position-table',
  standalone: true,
  imports: [MatTableModule, MatSelectModule, CommonModule, DatePipe],
  templateUrl: './position-table.component.html',
  styleUrl: './position-table.component.scss',
})
export class PositionTableComponent {
  private _tableData$: Observable<Position[]> = new Observable<Position[]>();

  @Input()
  set tableData$(value: Observable<Position[]>) {
    this._tableData$ = value.pipe(tap((data) => console.log(data)));
  }
  get tableData$() {
    return this._tableData$;
  }

  @Output() strategyUpdated = new EventEmitter<{ position: Position }>();
  displayedColumns = [
    'reportDate',
    'symbol',
    'assetClass',
    'quantity',
    'price',
  ];
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

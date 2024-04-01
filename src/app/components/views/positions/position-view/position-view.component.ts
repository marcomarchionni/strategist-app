import { Component } from '@angular/core';
import { PositionFilterComponent } from '../position-filter/position-filter.component';
import { PositionTableComponent } from '../position-table/position-table.component';
import { Observable } from 'rxjs';
import { Position } from '../../../../interfaces/entities';
import { PositionService } from '../../../../services/position-service/position.service';
import { PositionFind } from '../../../../interfaces/filter-parameters';

@Component({
  selector: 'app-position-view',
  standalone: true,
  imports: [PositionFilterComponent, PositionTableComponent],
  templateUrl: './position-view.component.html',
  styleUrl: './position-view.component.scss',
})
export class PositionViewComponent {
  tableData$: Observable<Position[]> = this.positionService.fetchPositions();

  constructor(private positionService: PositionService) {}

  handleFormSubmit(positionFind: PositionFind) {
    console.log(positionFind);
    this.tableData$ = this.positionService.fetchPositions(positionFind);
  }

  handleStrategyUpdate($event: { position: Position }) {
    this.positionService.updateStrategy($event.position);
  }
}

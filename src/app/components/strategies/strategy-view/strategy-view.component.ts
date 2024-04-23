import { Component } from '@angular/core';
import { StrategyService } from '../../../services/strategy-service/strategy.service';
import { StrategyTableComponent } from '../strategy-table/strategy-table.component';
@Component({
  selector: 'app-strategy-view',
  standalone: true,
  imports: [StrategyTableComponent],
  templateUrl: './strategy-view.component.html',
  styleUrl: './strategy-view.component.scss',
})
export class StrategyViewComponent {}

import { Routes } from '@angular/router';
import { TradeViewComponent } from './components/trade-view/trade-view.component';
import { PositionViewComponent } from './components/position-view/position-view.component';

export const routes: Routes = [
  { path: 'trade-view', component: TradeViewComponent },
  { path: 'position-view', component: PositionViewComponent },
];

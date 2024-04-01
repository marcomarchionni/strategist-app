import { Routes } from '@angular/router';
import { TradeViewComponent } from './components/trade-view/trade-view.component';
import { PositionViewComponent } from './components/position-view/position-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'trades', pathMatch: 'full' },
  { path: 'trades', component: TradeViewComponent },
  { path: 'positions', component: PositionViewComponent },
];

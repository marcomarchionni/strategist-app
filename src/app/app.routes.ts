import { Routes } from '@angular/router';
import { TradeViewComponent } from './components/trades/trade-view/trade-view.component';
import { PositionViewComponent } from './components/positions/position-view/position-view.component';
import { AuthViewComponent } from './components/auth/auth-view/auth-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'trades', pathMatch: 'full' },
  { path: 'trades', component: TradeViewComponent },
  { path: 'positions', component: PositionViewComponent },
  { path: 'auth', component: AuthViewComponent },
];

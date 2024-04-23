import { Routes } from '@angular/router';
import { PositionViewComponent } from './components/positions/position-view/position-view.component';
import { AuthViewComponent } from './components/auth/auth-view/auth-view.component';
import { TradeViewComponent } from './components/trades/trade-view/trade-view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortfolioViewComponent } from './components/portfolios/portfolio-view/portfolio-view.component';
import { StrategyViewComponent } from './components/strategies/strategy-view/strategy-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'trades', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'portfolios', component: PortfolioViewComponent },
  { path: 'strategies', component: StrategyViewComponent },
  { path: 'trades', component: TradeViewComponent },
  { path: 'positions', component: PositionViewComponent },
  { path: 'auth', component: AuthViewComponent },
];

import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortfolioViewComponent } from './components/portfolios/portfolio-view/portfolio-view.component';
import { PositionViewComponent } from './components/positions/position-view/position-view.component';
import { StrategyViewComponent } from './components/strategies/strategy-view/strategy-view.component';
import { TradeViewComponent } from './components/trades/trade-view/trade-view.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  }, // Protect with guard
  {
    path: 'portfolios',
    component: PortfolioViewComponent,
  }, // Protect with guard
  {
    path: 'strategies',
    component: StrategyViewComponent,
  }, // Protect with guard
  { path: 'trades', component: TradeViewComponent, canActivate: [authGuard] }, // Protect with guard
  {
    path: 'positions',
    component: PositionViewComponent,
  }, // Protect with guard
];

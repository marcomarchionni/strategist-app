import { Routes } from '@angular/router';
import { AuthViewComponent } from './components/auth/auth-view/auth-view.component';
import { MainComponent } from './components/main/main.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth', // Unauthenticated route (login, signup, etc.)
    component: AuthViewComponent,
  },
  {
    path: '', // Authenticated route
    component: MainComponent,
    canActivate: [authGuard], // Protect this route
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'portfolios',
        loadComponent: () =>
          import(
            './components/portfolios/portfolio-view/portfolio-view.component'
          ).then((m) => m.PortfolioViewComponent),
      },
      {
        path: 'strategies',
        loadComponent: () =>
          import(
            './components/strategies/strategy-view/strategy-view.component'
          ).then((m) => m.StrategyViewComponent),
      },
      {
        path: 'trades',
        loadComponent: () =>
          import('./components/trades/trade-view/trade-view.component').then(
            (m) => m.TradeViewComponent
          ),
      },
      {
        path: 'positions',
        loadComponent: () =>
          import(
            './components/positions/position-view/position-view.component'
          ).then((m) => m.PositionViewComponent),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: '', // Redirect to home if route is unknown
  },
];

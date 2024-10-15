import { Injectable } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private authService: AuthService) {}

  url = environment.apiBaseUrl + 'portfolios';

  getPortfolios() {
    const token = this.authService.getAccessToken();
    return new DataManager({
      url: this.url,
      headers: [{ Authorization: `Bearer ${token}` }],
    });
  }
}

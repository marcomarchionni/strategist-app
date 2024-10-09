import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthViewComponent } from './components/auth/auth-view/auth-view.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthService } from './services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    HeaderComponent,
    RouterModule,
    SidenavComponent,
    CommonModule,
    AuthViewComponent,
  ],
})
export class AppComponent {
  title = 'strategist-app';
  @ViewChild(SidenavComponent) sidenav?: SidenavComponent;
  @ViewChild(HeaderComponent) header?: HeaderComponent;
  isAuthenticated = false;

  constructor(public authService: AuthService) {
    this.authService.isAuthenticated$.subscribe((auth) => {
      this.isAuthenticated = auth;
    });
  }

  toggleSidenav() {
    (this.sidenav as SidenavComponent).toggle();
  }
}

import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, RouterModule, SidenavComponent],
})
export class AppComponent {
  title = 'strategist-app';
  @ViewChild(SidenavComponent) sidenav?: SidenavComponent;

  toggleSidenav() {
    (this.sidenav as SidenavComponent).toggle();
  }
}

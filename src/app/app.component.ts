import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, RouterModule, SidebarComponent],
})
export class AppComponent {
  title = 'strategist-app';
  @ViewChild(SidebarComponent) sidebar?: SidebarComponent;

  toggleSidenav() {
    console.log('toggleSidenav');
    console.log(this.sidebar);
    (this.sidebar as SidebarComponent).toggle();
  }
}

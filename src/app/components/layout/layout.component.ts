import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [MatSidenavModule, HeaderComponent, SidebarComponent, RouterOutlet],
})
export class LayoutComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
}

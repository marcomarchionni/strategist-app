import { Component, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  ],
})
export class LayoutComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
}

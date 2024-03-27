import { Component, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-layout2',
  standalone: true,
  templateUrl: './layout2.component.html',
  styleUrl: './layout2.component.scss',
  imports: [
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    GridComponent,
  ],
})
export class Layout2Component {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
}

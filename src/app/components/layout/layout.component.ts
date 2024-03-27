import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GridComponent } from '../grid/grid.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [HeaderComponent, GridComponent, MatSidenavModule, MatListModule],
})
export class LayoutComponent {}

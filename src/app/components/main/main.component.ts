import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, CommonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @ViewChild(SidenavComponent) sidenav?: SidenavComponent;
  @ViewChild(HeaderComponent) header?: HeaderComponent;

  toggleSidenav() {
    (this.sidenav as SidenavComponent).toggle();
  }
}

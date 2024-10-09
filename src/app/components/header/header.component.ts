import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import {
  AppBarComponent,
  AppBarModule,
} from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppBarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  @ViewChild('appBar', { static: true }) appBar?: AppBarComponent;

  onMenuClick() {
    this.toggleSidenav.emit();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppBarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  onMenuClick() {
    this.toggleSidenav.emit();
  }
}

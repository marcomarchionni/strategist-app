import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppBarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @ViewChild('appBar', { static: true }) appBar?: ElementRef;

  public appBarHeight: number = 0;

  ngAfterViewInit() {
    this.calculateAppBarHeight();
  }

  calculateAppBarHeight() {
    this.appBarHeight = this.appBar?.nativeElement?.offsetHeight ?? 0;
  }

  getAppBarHeight(): number {
    return this.appBarHeight;
  }

  onMenuClick() {
    this.toggleSidenav.emit();
  }
}

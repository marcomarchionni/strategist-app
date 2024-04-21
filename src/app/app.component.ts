import { AfterViewInit, Component, ViewChild } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  title = 'strategist-app';
  @ViewChild(SidenavComponent) sidenav?: SidenavComponent;
  @ViewChild(HeaderComponent) header?: HeaderComponent;

  ngAfterViewInit(): void {
    this.adjustMainContentHeight();
    window.addEventListener('resize', () => this.adjustMainContentHeight());
  }

  private adjustMainContentHeight() {
    const headerHeight = (this.header as HeaderComponent).getAppBarHeight();
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    mainContent.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  }

  toggleSidenav() {
    (this.sidenav as SidenavComponent).toggle();
  }
}

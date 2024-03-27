import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { Layout2Component } from './components/layout2/layout2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LayoutComponent, Layout2Component],
})
export class AppComponent {
  title = 'strategist-app';
}

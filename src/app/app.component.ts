import { Component } from '@angular/core';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GridComponent, HeaderComponent],
})
export class AppComponent {
  title = 'strategist-app';
}

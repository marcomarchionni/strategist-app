import { Component } from '@angular/core';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule, ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GridModule, PagerModule, DropDownListModule, ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule, LayoutComponent],
})
export class AppComponent {
  title = 'strategist-app';
}

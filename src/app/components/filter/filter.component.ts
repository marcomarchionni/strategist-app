import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TradeFind } from '../../interfaces/filter-parameters';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  @Output() formSubmit = new EventEmitter<TradeFind>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      after: [null],
      before: [null],
      symbol: [null],
      assetClass: [null],
      hasStrategy: [null],
    });
  }

  submit() {
    this.formSubmit.emit(this.form.value);
  }
}

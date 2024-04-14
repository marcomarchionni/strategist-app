import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TradeFind } from '../../../interfaces/filter-parameters';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-trade-filter',
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
  templateUrl: './trade-filter.component.html',
  styleUrl: './trade-filter.component.scss',
})
export class TradeFilterComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  private destroy$ = new Subject<void>();
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

    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.formSubmit.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

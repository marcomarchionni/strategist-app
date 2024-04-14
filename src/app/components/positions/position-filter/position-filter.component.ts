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
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { PositionFind } from '../../../interfaces/filter-parameters';

@Component({
  selector: 'app-position-filter',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './position-filter.component.html',
  styleUrl: './position-filter.component.scss',
})
export class PositionFilterComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({});
  private destroy$ = new Subject<void>();
  @Output() formSubmit = new EventEmitter<PositionFind>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
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

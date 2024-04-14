import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeFilterComponent } from './trade-filter.component';

describe('FilterComponent', () => {
  let component: TradeFilterComponent;
  let fixture: ComponentFixture<TradeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

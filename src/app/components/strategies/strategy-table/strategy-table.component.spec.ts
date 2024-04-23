import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyTableComponent } from './strategy-table.component';

describe('StrategyTableComponent', () => {
  let component: StrategyTableComponent;
  let fixture: ComponentFixture<StrategyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

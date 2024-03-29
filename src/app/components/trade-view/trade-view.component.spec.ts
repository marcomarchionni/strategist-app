import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeViewComponent } from './trade-view.component';

describe('ContentComponent', () => {
  let component: TradeViewComponent;
  let fixture: ComponentFixture<TradeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

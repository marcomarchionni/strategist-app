import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyViewComponent } from './strategy-view.component';

describe('StrategyViewComponent', () => {
  let component: StrategyViewComponent;
  let fixture: ComponentFixture<StrategyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

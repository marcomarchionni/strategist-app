import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionFilterComponent } from './position-filter.component';

describe('PositionFilterComponent', () => {
  let component: PositionFilterComponent;
  let fixture: ComponentFixture<PositionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricerangesliderComponent } from './pricerangeslider.component';

describe('PricerangesliderComponent', () => {
  let component: PricerangesliderComponent;
  let fixture: ComponentFixture<PricerangesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricerangesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricerangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

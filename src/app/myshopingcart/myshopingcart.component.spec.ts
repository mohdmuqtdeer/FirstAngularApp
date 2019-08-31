import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshopingcartComponent } from './myshopingcart.component';

describe('MyshopingcartComponent', () => {
  let component: MyshopingcartComponent;
  let fixture: ComponentFixture<MyshopingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyshopingcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

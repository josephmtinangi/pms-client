import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentDetailComponent } from './customer-payment-detail.component';

describe('CustomerPaymentDetailComponent', () => {
  let component: CustomerPaymentDetailComponent;
  let fixture: ComponentFixture<CustomerPaymentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

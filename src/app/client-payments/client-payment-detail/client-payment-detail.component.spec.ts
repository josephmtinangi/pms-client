import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaymentDetailComponent } from './client-payment-detail.component';

describe('ClientPaymentDetailComponent', () => {
  let component: ClientPaymentDetailComponent;
  let fixture: ComponentFixture<ClientPaymentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPaymentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPaymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaymentListComponent } from './client-payment-list.component';

describe('ClientPaymentListComponent', () => {
  let component: ClientPaymentListComponent;
  let fixture: ComponentFixture<ClientPaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

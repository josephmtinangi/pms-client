import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInvoiceDetailComponent } from './client-invoice-detail.component';

describe('ClientInvoiceDetailComponent', () => {
  let component: ClientInvoiceDetailComponent;
  let fixture: ComponentFixture<ClientInvoiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInvoiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

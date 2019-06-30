import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInvoiceListComponent } from './client-invoice-list.component';

describe('ClientInvoiceListComponent', () => {
  let component: ClientInvoiceListComponent;
  let fixture: ComponentFixture<ClientInvoiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInvoiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

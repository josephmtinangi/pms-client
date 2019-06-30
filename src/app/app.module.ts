import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { DashboardGuard } from './guards/dashboard.guard';
import { AuthInterceptorService } from './interceptors/auth.interceptor';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { ClientPaymentListComponent } from './client-payments/client-payment-list/client-payment-list.component';
import { ClientPaymentDetailComponent } from './client-payments/client-payment-detail/client-payment-detail.component';
import { CustomerPaymentListComponent } from './customer-payments/customer-payment-list/customer-payment-list.component';
import { CustomerPaymentDetailComponent } from './customer-payments/customer-payment-detail/customer-payment-detail.component';
import { ClientInvoiceListComponent } from './client-invoices/client-invoice-list/client-invoice-list.component';
import { ClientInvoiceDetailComponent } from './client-invoices/client-invoice-detail/client-invoice-detail.component';
import { CustomerInvoiceListComponent } from './customer-invoices/customer-invoice-list/customer-invoice-list.component';
import { CustomerInvoiceDetailComponent } from './customer-invoices/customer-invoice-detail/customer-invoice-detail.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { LeaseListComponent } from './leases/lease-list/lease-list.component';
import { LeaseDetailComponent } from './leases/lease-detail/lease-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
    LogoutComponent,
    HomeComponent,
    SidebarComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    ClientPaymentListComponent,
    ClientPaymentDetailComponent,
    CustomerPaymentListComponent,
    CustomerPaymentDetailComponent,
    ClientInvoiceListComponent,
    ClientInvoiceDetailComponent,
    CustomerInvoiceListComponent,
    CustomerInvoiceDetailComponent,
    ClientListComponent,
    ClientDetailComponent,
    ResetPasswordComponent,
    LeaseListComponent,
    LeaseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    DashboardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

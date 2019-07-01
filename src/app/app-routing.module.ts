import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { DashboardGuard } from './guards/dashboard.guard';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { ClientInvoiceListComponent } from './client-invoices/client-invoice-list/client-invoice-list.component';
import { ClientInvoiceDetailComponent } from './client-invoices/client-invoice-detail/client-invoice-detail.component';
import { CustomerInvoiceListComponent } from './customer-invoices/customer-invoice-list/customer-invoice-list.component';
import { CustomerInvoiceDetailComponent } from './customer-invoices/customer-invoice-detail/customer-invoice-detail.component';
import { ClientPaymentListComponent } from './client-payments/client-payment-list/client-payment-list.component';
import { ClientPaymentDetailComponent } from './client-payments/client-payment-detail/client-payment-detail.component';
import { CustomerPaymentListComponent } from './customer-payments/customer-payment-list/customer-payment-list.component';
import { CustomerPaymentDetailComponent } from './customer-payments/customer-payment-detail/customer-payment-detail.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { LeaseListComponent } from './leases/lease-list/lease-list.component';
import { LeaseDetailComponent } from './leases/lease-detail/lease-detail.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginLayoutComponent, 
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ] 
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: HomeComponent, canActivate: [DashboardGuard] },

      { path: 'properties', component: PropertyListComponent, canActivate: [DashboardGuard] },
      { path: 'properties/:id', component: PropertyDetailComponent, canActivate: [DashboardGuard] },

      { path: 'customers', component: CustomerListComponent, canActivate: [DashboardGuard] },
      { path: 'customers/:id', component: CustomerDetailComponent, canActivate: [DashboardGuard] },

      { path: 'leases', component: LeaseListComponent, canActivate: [DashboardGuard] },
      { path: 'leases/:id', component: LeaseDetailComponent, canActivate: [DashboardGuard] },

      { path: 'my-invoices', component: ClientInvoiceListComponent, canActivate: [DashboardGuard] },
      { path: 'my-invoices/:id', component: ClientInvoiceDetailComponent, canActivate: [DashboardGuard] },

      { path: 'customer-invoices', component: CustomerInvoiceListComponent, canActivate: [DashboardGuard] },
      { path: 'customer-invoices/:id', component: CustomerInvoiceDetailComponent, canActivate: [DashboardGuard] },

      { path: 'my-payments', component: ClientPaymentListComponent, canActivate: [DashboardGuard] },
      { path: 'my-payments/:id', component: ClientPaymentDetailComponent, canActivate: [DashboardGuard] },

      { path: 'customer-payments', component: CustomerPaymentListComponent, canActivate: [DashboardGuard] },
      { path: 'customer-payments/:id', component: CustomerPaymentDetailComponent, canActivate: [DashboardGuard] },

      { path: 'users', component: ClientListComponent, canActivate: [DashboardGuard] },
      { path: 'users/create', component: ClientCreateComponent, canActivate: [DashboardGuard] },
      { path: 'users/:id', component: ClientDetailComponent, canActivate: [DashboardGuard] },

      { path: 'reset-password', component: ResetPasswordComponent, canActivate: [DashboardGuard] },

      { path: 'logout', component: LogoutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

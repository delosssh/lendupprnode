import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';
import { LoanService } from './services/loan.service';
import { ClientPaymentService } from './services/client-payment.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientListChildComponent } from './client-list/client-list-child.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { LoansDialogComponent } from './client-list/loans-dialog.component';
import { LoanPaymentDialogComponent } from './loan-payments/loan-payment-dialog.component';
import { AddLoanPaymentDialogComponent } from './add-loan-payment/add-loan-payment-dialog.component';
import { AddNewLoanComponent } from './add-new-loan/add-new-loan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
// import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdSelectModule, MdDialogModule, MdTableModule } from '@angular/material';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatSelectModule, MatDialogModule, MatTableModule, MatListModule, MatStepperModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    AddPaymentComponent,
    AddClientComponent,
    ClientListComponent,
    ClientListChildComponent,
    LoanDetailsComponent,
    ClientDetailComponent,
    LoansDialogComponent,
    LoanPaymentDialogComponent,
    AddLoanPaymentDialogComponent,
    AddNewLoanComponent,
    NavbarComponent,
    HomeComponent
  ],
  entryComponents: [
    AddLoanPaymentDialogComponent,
    LoansDialogComponent,
    LoanPaymentDialogComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    // MdButtonModule,
    // MdMenuModule,
    // MdCardModule,
    // MdToolbarModule,
    // MdIconModule,
    // MdInputModule,
    // MdSelectModule,
    // MdDialogModule,
    // MdTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    CdkTableModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService,
    ClientService,
    LoanService,
    ClientPaymentService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }

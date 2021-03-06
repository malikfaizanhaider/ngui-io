import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';
import { SessionService } from './session.service';
import { AuthInterceptor } from './auth.interceptor';
import { XAppsComponent } from './x-apps/x-apps.component';
import { XApisComponent } from './x-apis/x-apis.component';
import { XAppDetailComponent } from './x-app-detail/x-app-detail.component';
import { XApiDetailComponent } from './x-api-detail/x-api-detail.component';
import { XApiService } from './x-api.service';
import { XAppService } from './x-app.service';
import { XHostsComponent } from './x-hosts/x-hosts.component';
import { XHostDetailComponent } from './x-host-detail/x-host-detail.component';
import { XVersionDetailComponent } from './x-version-detail/x-version-detail.component';
import { XVersionsComponent } from './x-versions/x-versions.component';
import { XHostService } from './x-host.service';
import { XVersionService } from './x-version.service';
import { XOrgsComponent } from './x-orgs/x-orgs.component';
import { XOrgService } from './x-org.service';
import { XOrgDetailComponent } from './x-org-detail/x-org-detail.component';
import { XAppCreateComponent } from './x-app-create/x-app-create.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    XAppsComponent,
    XApisComponent,
    XAppDetailComponent,
    XApiDetailComponent,
    XHostsComponent,
    XHostDetailComponent,
    XVersionDetailComponent,
    XVersionsComponent,
    XOrgsComponent,
    XOrgDetailComponent,
    XAppCreateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    UserService,
    ApiService,
    SessionService,
    AuthGuard,
    XApiService,
    XAppService,
    XHostService,
    XVersionService,
    XOrgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

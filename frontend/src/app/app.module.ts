import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatPaginator, MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule, MatTable, MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    DynamicFormComponent,
    FormSubmissionDialogComponent
} from './dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question/dynamic-form-question.component';
import {LoginComponent, LoginFailureDialogComponent} from './login/login.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {EventComponent} from './event/event.component';
import {MediaMatcher} from '@angular/cdk/layout';
import {ConfigService} from './config/config.service';
import {ExportComponent} from './export/export.component';
import {TokenInterceptor} from './auth/token-interceptor.service';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/guards/auth-guard.service';
import {EventTemplateEntityService} from './api/eventTemplateEntity.service';
import {LocationEntityService} from './api/locationEntity.service';
import {UserEntityService} from './api/userEntity.service';
import {ReportsComponent} from './reports/reports.component';
import {ReportsService} from './reports/reports.service';
import {AboutComponent} from './about/about.component';
import {UserEmailService} from './user/service/user-email.service';
import {
    ForgotPasswordComponent,
    SuccessfullySentPasswordRecoveryEmailComponent
} from './forgot-password/forgot-password.component';
import {
    ResetPasswordComponent,
    SuccessfullyResetPasswordComponent
} from './reset-password/reset-password.component';
import {
    UserComponent,
    UserSubmissionSuccessDialogComponent,
    UserSubmissionFailureDialogComponent
} from './user/user.component';
import {ReportsChartService} from './reports/reports-chart.service';
import {UserRoleResolverService} from './user/service/user-role-resolver.service';
import {RoleEntityService} from './api/roleEntity.service';
import {EventGuardService} from './auth/guards/event-guard.service';
import {AdminGuardService} from './auth/guards/admin-guard.service';
import {UserRoleService} from './user/service/user-role.service';
import {UserRegistrationService} from './api/registration.service';
import {UserByEmailResolverService} from './user/service/user-by-email-resolver.service';
import {ErrorComponent} from './error/error.component';
import {UserRoleCheckService} from './user/service/user-role-check.service';
import {ErrorService} from './error/error.service';
import {ErrorGuardService} from './error/error-guard.service';
import {LocationComponent} from './location/location.component';
import {SelectLocationComponent} from './select-location/select-location.component';
import {ParentLocationFinder} from './location/get-parent-locations';
import {LoggedInUserService} from './user/service/logged-in-user-service';
import {LocationEditComponent} from './location-edit/location-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        LoginComponent,
        PrivacyComponent,
        EventComponent,
        ExportComponent,
        ReportsComponent,
        FormSubmissionDialogComponent,
        SuccessfullySentPasswordRecoveryEmailComponent,
        SuccessfullyResetPasswordComponent,
        AboutComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        UserComponent,
        UserSubmissionSuccessDialogComponent,
        UserSubmissionFailureDialogComponent,
        ErrorComponent,
        LoginFailureDialogComponent,
        LocationComponent,
        SelectLocationComponent,
        LocationEditComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatProgressBarModule,
        MatTableModule,
        MatPaginatorModule
    ],
    entryComponents: [
        FormSubmissionDialogComponent,
        SuccessfullySentPasswordRecoveryEmailComponent,
        SuccessfullyResetPasswordComponent,
        UserSubmissionSuccessDialogComponent,
        UserSubmissionFailureDialogComponent,
        LoginFailureDialogComponent
    ],
    providers: [
        MediaMatcher,
        ConfigService,
        AuthService,
        AuthGuardService,
        AdminGuardService,
        EventGuardService,
        ErrorGuardService,
        UserEmailService, {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        ReportsService,
        EventTemplateEntityService,
        LocationEntityService,
        ReportsChartService,
        UserEntityService,
        UserRoleResolverService,
        RoleEntityService,
        UserRoleService,
        UserRegistrationService,
        RoleEntityService,
        UserRoleCheckService,
        UserByEmailResolverService,
        ErrorService,
        ParentLocationFinder,
        LoggedInUserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

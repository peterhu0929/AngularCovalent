import {NgModule, Type} from '@angular/core';
import {BrowserModule, Title}  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CovalentCoreModule} from '@covalent/core';
import {CovalentHighlightModule} from '@covalent/highlight';


import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {DashboardProductComponent} from './_layout/dashboard-product.component';
import {appRoutes, appRoutingProviders} from './app.routes';
// session
import {AuthGuard} from './_guards/index';
import {RegisterComponent} from './register/index';
import {AlertService, UserService} from './_services/index';
import { AuthenticationService } from './_services/index';
import {SessionService} from './_services/session.service';


// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './gl/gl-in-memory-data.service';
import {MainService} from './main/main-service.service';
import {SafePipeModule} from './_shared/safe-pipe.module';

import {AutoLogoutService} from './services/auto-logout.service';
import {StoreModule} from '@ngrx/store';
import {appReducerAction} from './services/app.reducer';
import {initialState} from './services/state.model';
import {AppSessionService} from "./_services/app-session.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardProductComponent,
    LoginComponent,
    RegisterComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    StoreModule.provideStore(appReducerAction, initialState),
    BrowserModule,
    BrowserAnimationsModule,
    CovalentCoreModule,
    CovalentHighlightModule,
    appRoutes,
    SafePipeModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    AuthenticationService,
    SessionService,
    Title,
    AuthGuard,
    AlertService,
    UserService,
    MainService,
    AppSessionService,
    AutoLogoutService,
  ], // additional providers needed for this module
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

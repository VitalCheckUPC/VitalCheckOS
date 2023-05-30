import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from './app.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import { MatGridListModule } from '@angular/material/grid-list';
import { RegistrationComponent } from './security/pages/registration/registration.component';
import {MatSidenavModule} from "@angular/material/sidenav";

import { BodyComponent } from './side-nav/body/body.component';
import { SidenavComponent } from './side-nav/sidenav/sidenav.component';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { ProductsComponent } from './side-nav/products/products.component';
import { StatisticsComponent } from './side-nav/statistics/statistics.component';
import { CoupensComponent } from './side-nav/coupens/coupens.component';
import { PagesComponent } from './side-nav/pages/pages.component';
import { MediaComponent } from './side-nav/media/media.component';
import { SettingsComponent } from './side-nav/settings/settings.component'
@NgModule({
  declarations: [
    SignInComponent,
    AppComponent,
    RegistrationComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    PagesComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    MediaComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    RouterTestingModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

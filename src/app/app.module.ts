import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { SettingsComponent } from './side-nav/settings/settings.component';
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {AgregarProductoModalComponent } from './side-nav/dashboard/agregar-producto-modal/agregar-producto-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RegistrationComponent } from './security/pages/registration/registration.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatTableModule } from '@angular/material/table';
import { BodyComponent } from './side-nav/body/body.component';
import { SidenavComponent } from './side-nav/sidenav/sidenav.component';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { ProductsComponent } from './side-nav/products/products.component';
import { StatisticsComponent } from './side-nav/statistics/statistics.component';
import { CoupensComponent } from './side-nav/coupens/coupens.component';
import {ReportesComponent} from './side-nav/reportes/reportes.component';
import { MediaComponent } from './side-nav/media/media.component';
import { FiltrarProductoModalComponent } from './side-nav/dashboard/filtrar-producto-modal/filtrar-producto-modal.component';
import { FiltrarProveedoresComponent } from './side-nav/products/filtrar-proveedores/filtrar-proveedores.component';
import { AgregarSolicitudModalComponent } from './side-nav/statistics/agregar-solicitud-modal/agregar-solicitud-modal.component';
import { Body2Component } from './side-nav/body/body2/body2.component'

import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    SignInComponent,
    AppComponent,
    RegistrationComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    ReportesComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    MediaComponent,
    SettingsComponent,
    Body2Component,
    AgregarProductoModalComponent,
    FiltrarProductoModalComponent,
    FiltrarProveedoresComponent,
    AgregarSolicitudModalComponent,

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
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

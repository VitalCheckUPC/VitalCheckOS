import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import { RegistrationComponent } from './security/pages/registration/registration.component';
import { CoupensComponent } from './side-nav/coupens/coupens.component';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { MediaComponent } from './side-nav/media/media.component';
import { PagesComponent } from './side-nav/reportes/reportes.component';
import { ProductsComponent } from './side-nav/products/products.component';
import { SettingsComponent } from './side-nav/settings/settings.component';
import { StatisticsComponent } from './side-nav/statistics/statistics.component';
import { SidenavComponent } from './side-nav/sidenav/sidenav.component';
import {BodyComponent} from "./side-nav/body/body.component";

import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'body',
    component: BodyComponent,
  children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'statistics', component: StatisticsComponent},
    {path: 'coupens', component: CoupensComponent},
    {path: 'reportes', component: PagesComponent},
    {path: 'media', component: MediaComponent},
    {path: 'settings', component: SettingsComponent},
  ]
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}


import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";

//sidenav1
import { VentasComponent } from './side-nav/ventas/ventas.component';
import { DashboardComponent } from './side-nav/dashboard/dashboard.component';
import { NotificacionesComponent } from './side-nav/notificaciones/notificaciones.component';
import { ReportesComponent } from './side-nav/reportes/reportes.component';
import { ProductsComponent } from './side-nav/products/products.component';
import { SettingsComponent } from './side-nav/settings/settings.component';
import { StatisticsComponent } from './side-nav/statistics/statistics.component';
import { SidenavComponent } from './side-nav/sidenav/sidenav.component';
import {BodyComponent} from "./side-nav/body/body.component";

//sidenav2



import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'farmacia',
    component: BodyComponent,
  children:[
    {path: 'inventario', component: DashboardComponent},
    {path: 'proovedores', component: ProductsComponent},
    {path: 'abastecimiento', component: StatisticsComponent},
    {path: 'ventas', component: VentasComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'notificaciones', component: NotificacionesComponent},
    {path: 'settings', component: SettingsComponent},
  ]
  },
  { path: 'proovedor',
  component: BodyComponent,
children:[
  {path: 'inventario', component: DashboardComponent},
  {path: 'farmacias', component: ProductsComponent},
  {path: 'abastecimiento', component: StatisticsComponent},
  {path: 'notificaciones', component: NotificacionesComponent},
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


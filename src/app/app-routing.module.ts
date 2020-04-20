import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUrl } from './app.url';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : '', redirectTo : AppUrl.Login, pathMatch : 'full'},
  {path : AppUrl.Login, component: LoginComponent},
  {path : AppUrl.Dashboard, component: DashboardComponent},
  {path : '*.*', redirectTo : AppUrl.Login, pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

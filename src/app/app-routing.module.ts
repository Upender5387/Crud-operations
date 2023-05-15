import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  {path: 'login-page', component: LoginPageComponent},
  {path: 'main-page', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

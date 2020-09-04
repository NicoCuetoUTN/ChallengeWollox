import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TechnologiesListComponent } from './components/technologies-list/technologies-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full" },
  { path: 'Login', component: LoginComponent },
  { path: 'TechnologiesList', component: TechnologiesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

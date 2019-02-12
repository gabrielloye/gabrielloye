import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {path: '', component: LandingComponent, data: {animation: 'LandingPage'}},
  {path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

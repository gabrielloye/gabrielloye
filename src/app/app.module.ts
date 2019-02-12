import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faPowerOff, faAngleDown, faAngleUp,
faEnvelope, faHome, faBookOpen, faCodeBranch, faUser,
faGraduationCap, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons'

import { MatSidenavModule } from '@angular/material/sidenav';

import { NgsRevealModule } from 'ngx-scrollreveal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor () {
    library.add(faCoffee, faPowerOff, faAngleDown,
    faAngleUp, faEnvelope, faHome, faBookOpen, faCodeBranch,
    faUser, faGraduationCap, faBriefcase)
  }
}

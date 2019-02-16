import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faPowerOff, faAngleDown, faAngleUp,
faEnvelope, faHome, faBookOpen, faCodeBranch, faUser,
faGraduationCap, faBriefcase, faChild, faStar, faSwimmer,
faHeadphones, faFutbol, faMusic, faCode, faLanguage, faMale,
faGlobeAsia, faPlay, faBars, faPencilAlt, faPenAlt, faSchool,
faUniversity, faTools, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { NgsRevealModule } from 'ngx-scrollreveal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './content/aboutme/aboutme.component';
import { EducationComponent } from './content/education/education.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ProjectsComponent } from './content/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    AboutmeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,

    FontAwesomeModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor () {
    library.add(faCoffee, faPowerOff, faAngleDown,
    faAngleUp, faEnvelope, faHome, faBookOpen, faCodeBranch,
    faUser, faGraduationCap, faBriefcase, faChild, faStar, faSwimmer,
    faHeadphones, faFutbol, faMusic, faCode, faLanguage, faMale,
    faGlobeAsia, faPlay, faBars, faPencilAlt, faPenAlt, faSchool, 
    faUniversity, faTools, faLightbulb, faToolbox, faKeyboard)
  }
}

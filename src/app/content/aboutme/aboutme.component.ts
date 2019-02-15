import { Component, OnInit } from '@angular/core';
import { aboutMeAnimations } from '../../animations/aboutmeanimations'

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
  animations: aboutMeAnimations()
})
export class AboutmeComponent implements OnInit {

  aboutTab: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.aboutTab = !this.aboutTab
  }
}

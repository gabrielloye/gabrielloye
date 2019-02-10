import { Component, OnInit } from '@angular/core';
import { powerAnimation, textAnimation } from '../animations/landinganimations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: powerAnimation().concat([
    textAnimation(),
  ])
})
export class LandingComponent implements OnInit {

  isOn: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  powerOn() {
    this.isOn = !this.isOn
  }
}

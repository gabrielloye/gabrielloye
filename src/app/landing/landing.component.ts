import { Component, OnInit } from '@angular/core';
import { powerAnimation } from '../animations/landinganimations';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: powerAnimation.concat([
    trigger('introLine', [
      transition(':enter', [
        style({opacity:0}),
        animate('1500ms', style({opacity:1}))
      ])
    ])
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

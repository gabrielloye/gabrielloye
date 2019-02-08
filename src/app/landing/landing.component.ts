import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('switchOn', [
      state('true', style({
        transform: 'translateY(-20%)',
        borderColor: 'red',
        color: 'red'
      })),
      state('false', style({
        transform: 'translateY(+20%)',
        borderColor: '*'
      })),
      transition('false<=>true', animate(500))
    ])
  ]
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

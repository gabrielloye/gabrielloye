import { trigger, transition, state, animate, style, query, group, animateChild } from '@angular/animations';

export function textAnimation() {
    return [trigger('fadeIn', [
      transition(':enter', [
        style({opacity:0}),
        animate('1000ms 1500ms cubic-bezier(.38,.38,.95,1.61)', style({opacity:1,}))
      ])
    ]),
    trigger('flyFromLeft', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(-50%)'}),
        animate ('1000ms 1000ms cubic-bezier(.49,.77,.71,1.31)', style({transform: 'translateX(0%)', opacity: 1}))
      ])
    ]),
    trigger('textFadeIn', [
      transition(':enter', [
        style({opacity:0, transform: 'translateY(10%)'}),
        animate('1000ms 2000ms ease', style({opacity:1, transform: 'translateY(0%)'}))
      ])
    ]),
    trigger('flyFromRight', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateX(50%)'}),
        animate ('1000ms 1000ms cubic-bezier(.49,.77,.71,1.31)', style({transform: 'translateX(0%)', opacity: 1}))
      ])
    ]),
    trigger('flyFromTop', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(-50%)'}),
        animate ('1000ms 1000ms cubic-bezier(.49,.77,.71,1.31)', style({transform: 'translateY(0%)', opacity: 1}))
      ])
    ]),
  ]
  }
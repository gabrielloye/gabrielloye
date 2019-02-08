import { trigger, transition, state, animate, style, group, query, animateChild } from '@angular/animations';

export const powerAnimation = [
    trigger('switchOn', [
      state('true', style({
        transform: 'translateY(-20%)',
        borderColor: 'yellow'
      })),
      state('false', style({
        borderColor: '*',
        transform: 'translateY(+20%)'        
      })),
      transition('false=>true', [
        group([
          query('@childSwitch', animateChild()),
          animate('1000ms ease-in')
        ])
      ]),
    ]),
    trigger('childSwitch', [
      state('true', style({
        color: 'yellow'
      })),
      state('false', style({
        color: '*'
      }))
    ])
  ]
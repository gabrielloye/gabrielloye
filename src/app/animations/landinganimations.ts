import { trigger, transition, state, animate, style, query, group, animateChild } from '@angular/animations';

export function powerAnimation(){
  return [trigger('powerOn',[
    state('true', style({
      backgroundColor: 'rgba(0,0,0,0)'
    })),
    state('false', style({
      backgroundColor: '*'
    })),
    transition('false<=>true',[
      group([
        query('@childAnimation', animateChild()),
        animate('1000ms ease-in')
      ])
    ]),
  ]),
  trigger('childAnimation', [
    state('true', style({
      color: '#0ff',
      stroke: 'rgb(0,0,0,0.1)',
      strokeWidth: '10'
    })),
    state('false', style({
      color: '*',
      stroke: 'rgb(0,0,0,0)',
      strokeWidth: '10'
    })),
    transition( 'false<=>true', [
      animate('1000ms ease')
    ])
  ])]
}

export function textAnimation() {
  return trigger('introLine', [
    transition(':enter', [
      style({opacity:0}),
      animate('1000ms 200ms ease-in', style({opacity:1}))
    ]),
    transition(':leave',[
      animate('1000ms', style({opacity:0}))
    ])
  ])
}

import { keyframes, trigger, transition, state, animate, style, group, query, animateChild } from '@angular/animations';

export function powerAnimation(){
  return trigger('powerOn',[
    state('true', style({
      backgroundColor: 'rgba(0,0,0,0)'
    })),
    state('false', style({
      backgroundColor: '*'
    })),
    transition('true<=>false',[
      animate('1000ms ease-in')
    ])
  ])
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
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LandingPage<=>AboutPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right:0,
          width: '100%',
          height: '100%'
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1100ms ease-in', keyframes([
            style({WebkitTransformOrigin: '50% 100%', transformOrigin: '50% 100%', offset:0}),
            style({WebkitTransformOrigin: '50% 100%', transformOrigin: '50% 100%', WebkitAnimationTimingFunction: 'ease-out', WebkitTransform: 'translateY(-50%) translateZ(-200px) rotateX(45deg)', offset:0.5}),
            style({WebkitTransformOrigin: '50% 100%', transformOrigin: '50% 100%', opacity: .3, WebkitTransform: 'translateY(-100%) rotateX(90deg)', offset:1})
          ]))
        ]),
        query(':enter', [
          animate('1100ms ease-in', style({ transform: 'translateY(0%)'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
    ]);
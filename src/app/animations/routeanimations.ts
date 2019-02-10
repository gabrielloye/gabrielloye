import { keyframes, trigger, transition, animate, style, group, query, animateChild } from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LandingPage=>AboutPage', [
      style({position: 'relative', transformStyle:'preserve-3d', perspective: '1200px'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right:0,
          width: '100%',
          height: '100%',
          transform: 'translate3d(0, 0, 0)'
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('800ms ease-in', keyframes([
            style({zIndex:999, transformOrigin: '50% 100%', offset:0}),
            style({zIndex:999, transformOrigin: '50% 100%', animationTimingFunction:'ease',transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg)', offset:0.5}),
            style({zIndex:999, transformOrigin: '50% 100%', opacity: .3, transform: 'translateY(-100%) rotateX(90deg)', offset:1})
          ]))
        ]),
        query(':enter', [
          animate('800ms ease-in', keyframes([
            style({transformOrigin: '50% 0%', opacity:0.5, transform: 'translateY(100%) rotateX(-90deg)', offset:0}),
            style({transformOrigin: '50% 0%', animationTimingFunction:'ease',transform: 'translateY(50%) translateZ(-200px) rotateX(-45deg)', offset:0.5}),
            style({transformOrigin: '50% 0%', transform: 'translateY(0%) translateZ(0) rotateX(0)', opacity:1, offset:1})
          ]))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  transition('AboutPage=>LandingPage', [
    style({position: 'relative', transformStyle:'preserve-3d', perspective: '1200px'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right:0,
        width: '100%',
        height: '100%',
        transform: 'translate3d(0, 0, 0)'
      })
    ]),
    query(':enter', [
      style({ transform: 'translateY(100%)'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('800ms ease-in', keyframes([
          style({zIndex:999, transformOrigin: '50% 0%', offset:0}),
          style({zIndex:999, transformOrigin: '50% 0%', animationTimingFunction:'ease',transform: 'translateY(50%) translateZ(200px) rotateX(-45deg)', offset:0.5}),
          style({zIndex:999, transformOrigin: '50% 0%', opacity: .3, transform: 'translateY(100%) rotateX(-90deg)', offset:1})
        ]))
      ]),
      query(':enter', [
        animate('800ms ease-in', keyframes([
          style({transformOrigin: '50% 100%', opacity:0.5, transform: 'translateY(-100%) rotateX(90deg)', offset:0}),
          style({transformOrigin: '50% 100%', animationTimingFunction:'ease',transform: 'translateY(-50%) translateZ(-200px) rotateX(45deg)', offset:0.5}),
          style({transformOrigin: '50% 100%', transform: 'translateY(0%) translateZ(0) rotateX(0)', opacity:1, offset:1})
        ]))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);
import { trigger, transition, state, animate, style, query, group, animateChild } from '@angular/animations';

export function aboutMeAnimations() {
    return [trigger("buttonAnimation", [
        state('unpressed', style({
            WebkitBoxShadow: '0.5px 3px rgb(99, 76, 46), 0.5px 4px rgb(94, 71, 41), 0.5px 5px rgb(84, 61, 31), 0.5px 6px rgb(84, 61, 31), 0.5px 7px rgb(74, 51, 21), 0.5px 8px rgb(64, 41, 11), 0.5px 14px 6px -1px rgb(122, 93, 54)',
            boxShadow: '0.5px 3px rgb(99, 76, 46), 0.5px 4px rgb(94, 71, 41), 0.5px 5px rgb(84, 61, 31), 0.5px 6px rgb(84, 61, 31), 0.5px 7px rgb(74, 51, 21), 0.5px 8px rgb(64, 41, 11), 0.5px 14px 6px -1px rgb(122, 93, 54)',
            cursor: 'pointer',
        })),
        state('pressed', style({
            transform: 'translate(0, 7px)',
            color: '#ffee10',
            textShadow: '0 0 8px #ffee10',
            pointerEvents: 'none',
            WebkitBoxShadow: '0px 1px rgb(99, 76, 46), 0px 1.5px rgb(94, 71, 41), 0px 2px rgb(84, 61, 31), 0px 2.5px rgb(84, 61, 31), 0px 3px rgb(74, 51, 21), 0px 3.5px rgb(74, 41, 11), 0px 4px 2px 0px rgba(122, 93, 54, .6)',
            boxShadow: '0px 1px rgb(99, 76, 46), 0px 1.5px rgb(94, 71, 41), 0px 2px rgb(84, 61, 31), 0px 2.5px rgb(84, 61, 31), 0px 3px rgb(74, 51, 21), 0px 3.5px rgb(74, 41, 11), 0px 4px 2px 0px rgba(122, 93, 54, .6)'
        })),
        transition('*=>*', [
            animate('1000ms ease')
        ])
    ]),
    trigger("slideAnimations", [
        state('in', style({
            transform: 'none',
            opacity: 1
        })),
        state('left', style({
            transform: 'translateX(100%)',
            opacity: 0
        })),
        state('right', style({
            transform: 'translateX(-100%)',
            opacity: 0
        })),
        transition('in<=>right', [
            animate(1000)
        ]),
        transition('in<=>left', [
            animate(1000)
        ])
    ])
]
}
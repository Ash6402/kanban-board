import { animate, animateChild, query, style, transition, trigger } from "@angular/animations";

export const routerAnimation = 
    trigger('animation', [
        transition('*<=>*', [
            query(':enter', [
                style({
                    opacity: 0,
                }), 
                animate('80ms',style({ opacity: 1}))
            ], {optional: true}),
        ])
    ])
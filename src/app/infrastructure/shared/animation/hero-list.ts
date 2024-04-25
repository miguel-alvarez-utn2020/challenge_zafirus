import { animate, query, stagger, style, transition, trigger } from "@angular/animations";


export const listAnimation =  trigger('listAnimation', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        stagger(100, [
          animate('0.3s ease-out', style({ opacity: 1, transform: 'none' }))
        ])
      ], { optional: true })
    ])
])
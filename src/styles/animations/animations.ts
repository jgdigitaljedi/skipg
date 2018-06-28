import { trigger, state, animate, transition, style, group } from '@angular/animations';

export const fadeInAnimation = [
	trigger('fadeInAnimation', [
		transition('void <=> *', []),
		transition('* <=> *', [ style({ opacity: 0 }), animate('700ms', style({ opacity: 1 })) ])
	])
];

export const fadeInAnim2 = [
	trigger('fadeIn', [ transition(':enter', [ style({ opacity: 0 }), animate('1s', style({ opacity: 1 })) ]) ])
];

export const slideInOutAnimation = [
	trigger('slideInOut', [
		state(
			'in',
			style({
				'max-height': '500px',
				opacity: '1',
				visibility: 'visible'
			})
		),
		state(
			'out',
			style({
				'max-height': '0px',
				opacity: '0',
				visibility: 'hidden'
			})
		),
		transition('in => out', [
			group([
				animate(
					'400ms ease-in-out',
					style({
						opacity: '0'
					})
				),
				animate(
					'600ms ease-in-out',
					style({
						'max-height': '0px'
					})
				),
				animate(
					'700ms ease-in-out',
					style({
						visibility: 'hidden'
					})
				)
			])
		]),
		transition('out => in', [
			group([
				animate(
					'1ms ease-in-out',
					style({
						visibility: 'visible'
					})
				),
				animate(
					'600ms ease-in-out',
					style({
						'max-height': '500px'
					})
				),
				animate(
					'800ms ease-in-out',
					style({
						opacity: '1'
					})
				)
			])
		])
	])
];

export const growAnimation = [
	trigger('grow', [
		transition('void <=> *', []),
		transition('* <=> *', [ style({ height: '{{startHeight}}px', opacity: 0 }), animate('.8s ease-in-out') ], {
			params: { startHeight: 0 }
		})
	])
];

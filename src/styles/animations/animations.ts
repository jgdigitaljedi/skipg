import { trigger, state, animate, transition, style, group, useAnimation } from '@angular/animations';
import {
	bounceInRight,
	bounceInLeft,
	bounceInDown,
	bounceInUp,
	fadeInLeft,
	fadeInRight,
	fadeInDown,
	fadeInUp,
	fadeIn,
	flipInX,
	flipInY,
	lightSpeedIn,
	rotateIn,
	zoomIn,
	zoomInDown,
	zoomInLeft,
	zoomInRight,
	zoomInUp,
	rollIn
} from 'ng-animate';

const animTime = '800ms';

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

export const slideShowAnimations = [
	trigger('slideShow', [
		transition('* => bounceInRight', useAnimation(bounceInRight)),
		transition('* => bounceInLeft', useAnimation(bounceInLeft)),
		transition('* => bounceInUp', useAnimation(bounceInUp)),
		transition('* => bounceInDown', useAnimation(bounceInDown)),
		transition('* => fadeInRight', useAnimation(fadeInRight)),
		transition('* => fadeInLeft', useAnimation(fadeInLeft)),
		transition('* => fadeInUp', useAnimation(fadeInUp)),
		transition('* => fadeInLeft', useAnimation(fadeInDown)),
		transition('* => fadeIn', useAnimation(fadeIn)),
		transition('* => flipInX', useAnimation(flipInX)),
		transition('* => flipInY', useAnimation(flipInY)),
		transition('* => lightSpeedIn', useAnimation(lightSpeedIn)),
		transition('* => rotateIn', useAnimation(rotateIn)),
		transition('* => zoomIn', useAnimation(zoomIn)),
		transition('* => zoomInLeft', useAnimation(zoomInLeft)),
		transition('* => zoomInRight', useAnimation(zoomInRight)),
		transition('* => zoomInDown', useAnimation(zoomInDown)),
		transition('* => zoomInUp', useAnimation(zoomInUp)),
		transition('* => rollIn', useAnimation(rollIn))
	])
];

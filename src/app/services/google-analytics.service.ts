import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var ga: Function;

@Injectable({
	providedIn: 'root'
})
export class GoogleAnalyticsService {
	constructor(private _router: Router) {
		this._router.events.subscribe((event) => {
			try {
				if (typeof ga === 'function') {
					if (event instanceof NavigationEnd) {
						ga('set', 'page', event.urlAfterRedirects);
						ga('send', 'pageview');
						console.log('%%% Google Analytics page view event %%%');
					}
				}
			} catch (e) {
				console.log(e);
			}
		});
	}

	/**
   * Emit google analytics event
   * Fire event example:
   * this.emitEvent("testCategory", "testAction", "testLabel", 10);
   * @param {string} eventCategory
   * @param {string} eventAction
   * @param {string} eventLabel
   * @param {number} eventValue
   */
	public emitEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {
		if (typeof ga === 'function') {
			ga('send', 'event', {
				eventCategory: eventCategory,
				eventLabel: eventLabel,
				eventAction: eventAction,
				eventValue: eventValue
			});
		}
	}
}

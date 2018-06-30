import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { environment, gaKey } from '../environments/environment';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	// activeRoute: BehaviorSubject;

	constructor(private _activated: ActivatedRoute, private _ga: GoogleAnalyticsService) {}

	ngOnInit() {
		if (environment && environment.production) {
			this._appendGaTrackingCode();
		}
		this._activated.url.subscribe((url: UrlSegment[]) => {
			// console.log('url', url);
		});
	}

	private _appendGaTrackingCode() {
		try {
			const script = document.createElement('script');
			script.innerHTML =
				`
	      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	      ga('create', '` +
				gaKey +
				`', 'auto');
	    `;
			document.head.appendChild(script);
		} catch (ex) {
			console.error('Error appending google analytics');
			console.error(ex);
		}
	}
}

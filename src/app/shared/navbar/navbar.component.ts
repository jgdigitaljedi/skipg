import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
	activeRoute: string;

	constructor(private _route: Router) {}

	ngOnInit() {
		console.log('route', this._route);
		this.activeRoute = this._route.routerState.snapshot.url;
	}

	navNext(which: string): void {
		this.activeRoute = which;
		this._route.navigate([ which ]);
	}
}

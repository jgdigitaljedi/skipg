import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
	@Input() activeRoute: string;

	constructor(private _route: Router, private _activated: ActivatedRoute) {}

	ngOnInit() {}

	navNext(which: string): void {
		this.activeRoute = which;
		this._route.navigate([ which ]);
	}
}

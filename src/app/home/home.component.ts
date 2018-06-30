import { Component, OnInit } from '@angular/core';
import { enterFade } from '../../styles/animations/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ],
	animations: [ enterFade ],
	host: { '[@enterFade]': '' }
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { enterFade } from '../../styles/animations/animations';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: [ './info.component.scss' ],
	animations: [ enterFade ],
	host: { '[@enterFade]': '' }
})
export class InfoComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

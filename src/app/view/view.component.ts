import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { CloudinaryService } from '../services/cloudinary.service';
import { Photo } from '../services/photo';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.scss' ]
})
export class ViewComponent implements OnInit {
	photos = [];
	gridColumns;
	options = {
		gutter: 10,
		transitionDuration: '0.8s'
	};

	constructor(private _cloud: CloudinaryService) {
		this.gridColumns = Math.floor(window.innerWidth / 300);
	}

	ngOnInit() {
		this._cloud.getPhotos().subscribe((res) => {
			this.photos = res;
			console.log('asdfasdfasdf', res);
		});
	}
}

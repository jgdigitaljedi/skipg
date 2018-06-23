import { Component, OnInit, Inject } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { CloudinaryService } from '../services/cloudinary.service';
import { MatDialog } from '@angular/material';
// import { Photo } from '../services/photo';
import { ImageDialogComponent } from '../widgets/image-dialog/image-dialog.component';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.scss' ]
})
export class ViewComponent implements OnInit {
	// @TODO: add infinite scroll and call getMorePhotos
	allPhotos = [];
	photos = [];
	gridColumns;
	options = {
		gutter: 10,
		transitionDuration: '0.8s'
	};

	constructor(private _cloud: CloudinaryService, public dialog: MatDialog) {
		this.gridColumns = Math.floor(window.innerWidth / 300);
	}

	ngOnInit() {
		this._cloud.getPhotos().subscribe((res) => {
			this.allPhotos = res;
			this.getMorePhotos();
			console.log('all photos', res);
		});
	}

	getMorePhotos() {
		const pLen = this.photos.length;
		if (pLen) {
			const currentPhotos = [ ...this.photos ];
			const nextPhotos = [ ...this.allPhotos ].slice(pLen, pLen + 10);
			this.photos = [ ...currentPhotos, ...nextPhotos ];
		} else {
			this.photos = [ ...this.allPhotos ].slice(0, 10);
		}
	}

	openImageDialog(which) {
		const { width, height } = which;
		// minus 50 px for the close area at the bottom
		const screenHeight = window.innerHeight - 50;
		let finalWidth, finalHeight;
		if (height > screenHeight) {
			// if the height is more than the screen height then calculate to fit
			const percent = screenHeight / height;
			finalHeight = height * percent;
			finalWidth = width * percent;
		} else {
			finalWidth = width;
			finalHeight = height;
		}
		let dialogRef = this.dialog.open(ImageDialogComponent, {
			width: `${finalWidth + 9}px`,
			maxWidth: '95%',
			height: `${finalHeight + 50}px`,
			maxHeight: '100%',
			data: { photo: which, base: this._cloud.photoBaseUrl(), width: finalWidth, height: finalHeight }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}

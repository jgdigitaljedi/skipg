import { Component, OnInit, Inject } from '@angular/core';
import { CloudinaryService } from '../services/cloudinary.service';
import { MatDialog } from '@angular/material';
import { ImageDialogComponent } from '../widgets/image-dialog/image-dialog.component';
import { enterFade } from '../../styles/animations/animations';
import { Photo } from '../services/photo';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.scss' ],
	animations: [ enterFade ],
	host: { '[@enterFade]': '' }
})
export class ViewComponent implements OnInit {
	// array of objects from cloudinary containing info about photos
	allPhotos: Photo[] = [];
	// array of currently loaded photos since they load a few at a time
	photos: Photo[] = [];
	// how many grid columns will be on the screen for masonry layout
	gridColumns: number;
	// masonry options
	options = {
		gutter: 10,
		transitionDuration: '0.8s',
		fitWidth: true
	};

	constructor(private _cloud: CloudinaryService, public dialog: MatDialog) {
		this.gridColumns = Math.floor(window.innerWidth / 300);
	}

	ngOnInit() {
		this._cloud.getPhotos().subscribe((res) => {
			this.allPhotos = res;
			this.getMorePhotos();
		});
	}

	getMorePhotos(): void {
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
		const screenWidth = window.innerWidth - 10;
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
		if (finalWidth > screenWidth) {
			const percent = screenWidth / finalWidth;
			finalHeight = Math.floor(finalHeight * percent * 0.98);
			finalWidth = Math.floor(finalWidth * percent * 0.98);
		}
		let dialogRef = this.dialog.open(ImageDialogComponent, {
			maxWidth: '100%',
			maxHeight: '100%',
			data: {
				photo: which,
				base: this._cloud.photoBaseUrl(),
				width: finalWidth,
				height: finalHeight,
				dialogDimensions: { width: `${finalWidth + 9}px`, height: `${finalHeight + 50}px` }
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			// console.log('The dialog was closed');
		});
	}

	scrollTop() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}
}

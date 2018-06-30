import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { fadeInAnimation, fadeInAnim2 } from '../../../styles/animations/animations';

@Component({
	selector: 'app-image-dialog',
	templateUrl: './image-dialog.component.html',
	styleUrls: [ './image-dialog.component.scss' ],
	animations: [ fadeInAnimation, fadeInAnim2 ]
})
export class ImageDialogComponent implements OnInit {
	@ViewChild('imageDir') imageDir: ElementRef;
	imageDone = false;

	constructor(public dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit() {}

	closeDialog(): void {
		this.dialogRef.close();
	}

	imageLoaded() {
		this._styleImage();
		this.imageDone = true;
	}

	private _styleImage() {
		const image = this.imageDir.nativeElement;
		if (image) {
			this.imageDir.nativeElement.style.maxHeight = this.data.height + 'px';
			image['style'].height = this.data.height + 'px';
		}
		setTimeout(() => {
			this.dialogRef.updateSize(this.data.dialogDimensions.width, this.data.dialogDimensions.height);
		}, 150);
	}
}

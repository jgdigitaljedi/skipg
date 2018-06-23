import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-image-dialog',
	templateUrl: './image-dialog.component.html',
	styleUrls: [ './image-dialog.component.scss' ]
})
export class ImageDialogComponent implements OnInit {
	@ViewChild('imageDir') imageDir: ElementRef;

	constructor(public dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit() {
		setTimeout(() => {
			const children = this.imageDir['el'].nativeElement.children;
			const childArr = Array.from(children);
			if (childArr.length) {
				const image = childArr[0];
				this.imageDir['el'].nativeElement.style.maxHeight = this.data.height + 'px';
				image['style'].height = this.data.height + 'px';
			}
		}, 300);
	}

	closeDialog(): void {
		this.dialogRef.close();
	}
}

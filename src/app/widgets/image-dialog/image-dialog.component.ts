import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { growAnimation, fadeInAnimation } from '../../../styles/animations/animations';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss'],
  animations: [growAnimation, fadeInAnimation]
})
export class ImageDialogComponent implements OnInit {
  @ViewChild('imageDir') imageDir: ElementRef;
  imageDone = false;

  constructor(public dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  imageLoaded() {
    this._styleImage();
    this.imageDone = true;
  }

  private _styleImage() {
    this.dialogRef.updateSize(this.data.dialogDimensions.width, this.data.dialogDimensions.height);
    const image = this.imageDir.nativeElement;
    if (image) {
      this.imageDir.nativeElement.style.maxHeight = this.data.height + 'px';
      image['style'].height = this.data.height + 'px';
    }
  }
}

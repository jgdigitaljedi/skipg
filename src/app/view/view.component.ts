import { Component, OnInit, Inject } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { CloudinaryService } from '../services/cloudinary.service';
import { MatDialog } from '@angular/material';
// import { Photo } from '../services/photo';
import { ImageDialogComponent } from '../widgets/image-dialog/image-dialog.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
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
      const currentPhotos = [...this.photos];
      const nextPhotos = [...this.allPhotos].slice(pLen, pLen + 10);
      this.photos = [...currentPhotos, ...nextPhotos];
    } else {
      this.photos = [...this.allPhotos].slice(0, 10);
    }
  }

  saveImage(photo) {
    console.log('save image', photo);
  }

  openImageDialog(which) {
    let dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '250px',
      data: { photo: which.public_id, base: this._cloud.photoBaseUrl() }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { CloudinaryService } from '../services/cloudinary.service';
import { Photo } from '../services/photo';

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

  constructor(private _cloud: CloudinaryService) {
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
      const nextPhotos = [...this.allPhotos].slice(pLen, (pLen + 10));
      this.photos = [...currentPhotos, ...nextPhotos];
    } else {
      this.photos = [...this.allPhotos].slice(0, 10);
    }
  }
}

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
  private photos;

  constructor(private _cloud: CloudinaryService) { }

  ngOnInit() {
    this._cloud.getPhotos()
      .subscribe((res) => {
        this.photos = res;
        console.log('asdfasdfasdf', res);
      });
  }

}

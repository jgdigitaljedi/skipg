import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeInAnimation, fadeInAnim2, growAnimation, slideShowAnimations } from '../../styles/animations/animations';
import { Photo } from '../services/photo';
import { CloudinaryService } from '../services/cloudinary.service';
import { ISSState } from '../models/slideshow.model';
import * as _shuffle from 'lodash/shuffle';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [fadeInAnimation, slideShowAnimations],
  host: { '[@fadeInAnimation]': '' }
})
export class SlideshowComponent implements OnInit, OnDestroy {
  currentImage: string;
  allPhotos: Photo[];
  baseUrl: string;
  state: ISSState;
  timer;
  interval = 5000;
  isPaused = false;
  animation: string;
  animationArr = [
    'fadeIn',
    'fadeInRight',
    'fadeInLeft',
    'fadeInUp',
    'fadeInDown',
    'bounceInUp',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'flipInX',
    'flipInY',
    'lightSpeedIn',
    'rotateIn',
    'zoomIn',
    'zoomInLeft',
    'zoomInRight',
    'zoomInDown',
    'zoomInUp',
    'rollIn'
  ];

  constructor(private _cloud: CloudinaryService) { }

  ngOnInit() {
    this.baseUrl = this._cloud.photoBaseUrl();
    this._cloud.getPhotos().subscribe((res) => {
      this.allPhotos = _shuffle(res);
      this.state = {
        pLen: res.length,
        currIndex: 0
      };
      this.currentImage = this.baseUrl + this.allPhotos[this.state.currIndex].public_id;
      this.startShow();
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startShow() {
    this.animation = this.animationArr[0];
    this.isPaused = false;
    this._timer();
  }

  pauseShow() {
    this.isPaused = true;
    clearInterval(this.timer);
  }

  changeSlide(dir) {
    clearInterval(this.timer);
    if (dir === 'back') {
      this.state.currIndex--;
      // this.state.currIndex = this.state.currIndex - 2;
    } else {
      this.state.currIndex++;
    }
    this.currentImage = this.baseUrl + this.allPhotos[this.state.currIndex].public_id;
    this._timer();
  }

  private _timer() {
    this.timer = setInterval(() => {
      this.handleAnimation();
      const nextIndex = this.state.currIndex + 1;
      if (nextIndex < this.state.pLen) {
        this.state.currIndex = nextIndex;
      } else {
        this.state.currIndex = 0;
      }
      console.log('interval', this.state.currIndex);
      this.currentImage = this.baseUrl + this.allPhotos[this.state.currIndex].public_id;
    }, this.interval);
  }

  private handleAnimation() {
    // testing only; will add real logic when concept proven to work
    // this.animation = this.animation === 'fadeIn' ? 'bounceInRight' : 'fadeIn';
    const rando = Math.floor(Math.random() * this.animationArr.length);
    this.animation = this.animationArr[rando];
    console.log('animation', this.animation);
  }
}

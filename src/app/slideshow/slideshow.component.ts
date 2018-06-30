import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeInAnimation, slideShowAnimations } from '../../styles/animations/animations';
import { Photo } from '../services/photo';
import { CloudinaryService } from '../services/cloudinary.service';
import { ISSState } from '../models/slideshow.model';
import * as _shuffle from 'lodash/shuffle';
import { Router, NavigationStart } from '@angular/router';

@Component({
	selector: 'app-slideshow',
	templateUrl: './slideshow.component.html',
	styleUrls: [ './slideshow.component.scss' ],
	animations: [ fadeInAnimation, slideShowAnimations ],
	host: { '[@fadeInAnimation]': '' }
})
export class SlideshowComponent implements OnInit, OnDestroy {
	currentImage: string;
	allPhotos: Photo[];
	baseUrl: string;
	state: ISSState;
	timer;
	interval = 6000;
	isPaused = false;
	animation: string;
	musicPaused = true;
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
	audio;
	songs = [
		'../../assets/songs/proudMary.mp3',
		'../../assets/songs/dancingInTheStreet.mp3',
		'../../assets/songs/gotYouBabe.mp3'
	];
	songIndex = -1;
	routeSub;

	constructor(private _cloud: CloudinaryService, private _route: Router) {}

	ngOnInit() {
		this.routeSub = this._route.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				this.audio.pause();
				setTimeout(() => {
					this.audio = null;
					clearInterval(this.timer);
				}, 100);
			}
		});
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
		this.routeSub.unsubscribe();
		this.audio = null;
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
		} else {
			this.state.currIndex++;
		}
		this.currentImage = this.baseUrl + this.allPhotos[this.state.currIndex].public_id;
		this._timer();
	}

	playPauseMusic(noPause?) {
		if (!this.audio) {
			this.audio = new Audio();
		}
		if (!noPause) {
			this.musicPaused = !this.musicPaused;
		}
		if (this.musicPaused) {
			this.audio.pause();
			this.audio = null;
		} else {
			// this.audio.src = this.songs[this.songIndex];
			// this.audio.load();
			this._loadAudio();
			this.audio.play();
			this.musicPaused = false;
			this.audio.onended = () => {
				// this._loadAudio();
				// this.audio.play();
				this.playPauseMusic(true);
			};
		}
	}

	private _loadAudio() {
		this.songIndex++;
		if (this.songIndex === this.songs.length) {
			this.songIndex = 0;
		}
		this.audio = null;
		this.audio = new Audio();
		this.audio.src = this.songs[this.songIndex];
		this.audio.load();
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
			this.currentImage = this.baseUrl + this.allPhotos[this.state.currIndex].public_id;
		}, this.interval);
	}

	private handleAnimation() {
		const rando = Math.floor(Math.random() * this.animationArr.length);
		this.animation = this.animationArr[rando];
	}
}

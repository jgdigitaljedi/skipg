import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../styles/animations/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

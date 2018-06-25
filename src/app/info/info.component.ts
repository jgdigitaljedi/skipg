import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../styles/animations/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

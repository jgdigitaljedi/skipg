import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // activeRoute: BehaviorSubject;

  constructor(private _activated: ActivatedRoute) { }

  ngOnInit() {
    console.log('activated', this._activated);
    this._activated.url.subscribe((url: UrlSegment[]) => {
      console.log('url', url);
    });
  }
}

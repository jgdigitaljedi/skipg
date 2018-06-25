import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() activeRoute: string;

  constructor(private _route: Router) { }

  ngOnInit() {
    this._route.events.subscribe((val: RouterEvent) => {
      this.activeRoute = val.url;
    });
  }

  navNext(which: string): void {
    this.activeRoute = which;
    this._route.navigate([which]);
  }
}

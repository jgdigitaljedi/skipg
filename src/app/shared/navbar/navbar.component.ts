import { Component, OnInit, Input } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() activeRoute: string;
  isShirley: boolean;

  constructor(private _route: Router) {}

  ngOnInit() {
    this._route.events.subscribe((val: RouterEvent) => {
      console.log("val", val);
      this.activeRoute = val.url;
      this.isShirley = val.url === "/shirley";
    });
  }

  navNext(which: string): void {
    this.activeRoute = which;
    this._route.navigate([which]);
  }
}

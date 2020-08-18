import { Component, OnInit } from "@angular/core";
import { enterFade } from "../../styles/animations/animations";

@Component({
  selector: "app-shirley",
  templateUrl: "./shirley.component.html",
  styleUrls: ["./shirley.component.scss"],
  animations: [enterFade],
  host: { "[@enterFade]": "" },
})
export class ShirleyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

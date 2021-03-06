import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { fadeInAnimation } from "../../styles/animations/animations";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" },
})
export class UploadComponent implements OnInit {
  firstForm: FormGroup;
  passForm: FormGroup;
  // not supposed to be world class security. Just supposed to stop the average jerk from uploading dick pics on my Pop's site.
  ffPass = "rainbow";

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstForm = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.passForm = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-upload',
	templateUrl: './upload.component.html',
	styleUrls: [ './upload.component.scss' ]
})
export class UploadComponent implements OnInit {
	firstForm: FormGroup;
	passForm: FormGroup;

	constructor(private _formBuilder: FormBuilder) {}

	ngOnInit() {
		this.firstForm = this._formBuilder.group({
			firstCtrl: [ '', Validators.required ]
		});
		this.passForm = this._formBuilder.group({
			secondCtrl: [ '', Validators.required ]
		});
	}
}

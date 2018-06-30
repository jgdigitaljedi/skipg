// core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// lib
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule, provideCloudinary } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './config';
import { Cloudinary } from '@cloudinary/angular-5.x/src/cloudinary.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from 'ng2-file-upload';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxMasonryModule } from 'ngx-masonry';
import { ShareButtonsModule } from '@ngx-share/buttons';

export const cloudinary = {
	Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

// social button icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons/faPinterestP';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';

const icons = [
	faFacebookF,
	faTwitter,
	faCommentAlt,
	faEnvelope,
	faCheck,
	faPrint,
	faExclamation,
	faEllipsisH,
	faMinus,
	faPinterestP,
	faFacebookMessenger
];

library.add(...icons);

// material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

// modules
import { AppRoutingModule, routingComponents } from './app.routing';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { UploaderComponent } from './widgets/uploader/uploader.component';
import { ImageDialogComponent } from './widgets/image-dialog/image-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// services
import { GoogleAnalyticsService } from './services/google-analytics.service';

@NgModule({
	declarations: [ AppComponent, ImageDialogComponent, routingComponents, UploaderComponent ],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CloudinaryModule.forRoot(cloudinary, config),
		FileUploadModule,
		FlexLayoutModule,
		FormsModule,
		HttpClientModule,
		InfiniteScrollModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatStepperModule,
		MatToolbarModule,
		NgxMasonryModule,
		ReactiveFormsModule,
		SharedModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
		ShareButtonsModule.forRoot()
	],
	providers: [ GoogleAnalyticsService ],
	bootstrap: [ AppComponent ],
	entryComponents: [ ImageDialogComponent ]
})
export class AppModule {}

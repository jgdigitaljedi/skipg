// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// lib
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileUploadModule } from 'ng2-file-upload';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule, provideCloudinary } from '@cloudinary/angular-5.x';
import cloudinaryConfiguration from './config';
import { Cloudinary } from '@cloudinary/angular-5.x/src/cloudinary.service';

export const cloudinary = {
	Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;
import { NgxMasonryModule } from 'ngx-masonry';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

// modules
import { AppRoutingModule, routingComponents } from './app.routing';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { UploaderComponent } from './widgets/uploader/uploader.component';

@NgModule({
	declarations: [ AppComponent, routingComponents, UploaderComponent ],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CloudinaryModule.forRoot(cloudinary, config),
		FileUploadModule,
		FlexLayoutModule,
		HttpClientModule,
		InfiniteScrollModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatStepperModule,
		MatToolbarModule,
		NgxMasonryModule,
		SharedModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

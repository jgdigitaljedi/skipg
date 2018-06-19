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

// material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';


// modules
import { AppRoutingModule, routingComponents } from './app.routing';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { UploaderComponent } from './widgets/uploader/uploader.component';

@NgModule({
  declarations: [AppComponent, routingComponents, UploaderComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    SharedModule,
    BrowserAnimationsModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinary, config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

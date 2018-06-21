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

export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

// material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
  declarations: [AppComponent, routingComponents, UploaderComponent],
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
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatStepperModule,
    MatToolbarModule,
    NgxMasonryModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// lib
import { FlexLayoutModule } from '@angular/flex-layout';

// modules
import { AppRoutingModule, routingComponents } from './app.routing';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent, routingComponents ],
	imports: [ AppRoutingModule, BrowserModule, FlexLayoutModule, SharedModule, BrowserAnimationsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

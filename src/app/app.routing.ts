// core imports
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', pathMatch: 'full', component: HomeComponent },
	{ path: 'slideshow', pathMatch: 'full', component: SlideshowComponent },
	{ path: 'upload', pathMatch: 'full', component: UploadComponent },
	{ path: 'view', pathMatch: 'full', component: ViewComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routingComponents = [ HomeComponent, SlideshowComponent, UploadComponent, ViewComponent ];
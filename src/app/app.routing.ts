// core imports
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// components
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { SlideshowComponent } from "./slideshow/slideshow.component";
import { UploadComponent } from "./upload/upload.component";
import { ViewComponent } from "./view/view.component";
import { ShirleyComponent } from "./shirley/shirley.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/skip" },
  // { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: "skip", pathMatch: "full", component: HomeComponent },
  { path: "shirley", pathMatch: "full", component: ShirleyComponent },
  { path: "home", pathMatch: "full", component: HomeComponent },
  { path: "slideshow", pathMatch: "full", component: SlideshowComponent },
  { path: "upload", pathMatch: "full", component: UploadComponent },
  { path: "view", pathMatch: "full", component: ViewComponent },
  { path: "info", pathMatch: "full", component: InfoComponent },
  { path: "**", redirectTo: "/skip" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  InfoComponent,
  SlideshowComponent,
  UploadComponent,
  ViewComponent,
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NavbarComponent } from './navbar/navbar.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [ CommonModule, MatToolbarModule, MatButtonModule ],
	declarations: [ NavbarComponent ],
	exports: [ NavbarComponent ]
})
export class SharedModule {}

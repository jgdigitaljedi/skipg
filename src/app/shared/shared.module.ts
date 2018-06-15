import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { NavbarComponent } from './navbar/navbar.component';

// lib
import { FlexLayoutModule } from '@angular/flex-layout';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
	imports: [ CommonModule, FlexLayoutModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule ],
	declarations: [ NavbarComponent ],
	exports: [ NavbarComponent ]
})
export class SharedModule {}

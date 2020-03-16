import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomMaterialModule } from 'src/app/custom-material.module';
import { MatCardModule } from '@angular/material';



@NgModule({
  declarations: [
    //StickyHeaderComponent,
    //HeaderComponent,
    //FooterComponent,
    //AboutusComponent,
  
  ],
  imports: [
    CustomMaterialModule,
    MatCardModule,
    CommonModule
  ]
})
export class SharedModule { }

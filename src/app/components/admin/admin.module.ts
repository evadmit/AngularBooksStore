import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { OrdersComponent } from './orders/orders.component';
import { BooksManagementComponent } from './books-management/books-management.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from 'src/app/custom-material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    //  AdminComponent,
    //  OrdersComponent,
    //  BooksManagementComponent,
  ],
  imports: [
    MatCardModule,
    CustomMaterialModule,
    SharedModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
  ]
})
export class AdminModule { }

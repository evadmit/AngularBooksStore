import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { AboutusComponent } from './components/shared/aboutus/aboutus.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CustomMaterialModule } from './custom-material.module';
import { BackendService } from './services/backend.service';
import { StickyHeaderComponent } from './components/shared/sticky-header/sticky-header.component';
import { BookCardItemComponent } from './components/shared/items/book-card-item/book-card-item.component';
import { CartItemComponent } from './components/shared/items/cart-item/cart-item.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderItemComponent } from './components/shared/items/order-item/order-item.component';
import { BookItemComponent } from './components/shared/items/book-item/book-item.component';
import { RemoveOrderDialog } from './components/shared/items/dialogs/remove-order-dialog/remove-order-dialog.component';
import { MatDialogModule } from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksListComponent,
    RegisterComponent,
    ShoppingCartComponent,
    BookDetailsComponent,
    AdminComponent,
    HeaderComponent,
    StickyHeaderComponent,
    AboutusComponent,
    FooterComponent,
    BookCardItemComponent,
    CartItemComponent,
    OrdersComponent,
    OrderItemComponent,
    BookItemComponent,
    RemoveOrderDialog,
    ProfileComponent
  ],
  entryComponents:[RemoveOrderDialog],
  imports: [
    FormsModule, 
    MatDialogModule,
    ReactiveFormsModule ,
    FlexLayoutModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

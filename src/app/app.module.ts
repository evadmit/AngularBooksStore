import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AboutusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

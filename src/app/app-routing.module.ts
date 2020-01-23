import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/shared/aboutus/aboutus.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';


const routes: Routes = [
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'aboutus', component:AboutusComponent},
{path:'books-list', component:BooksListComponent},
{path:'book-details', component:BookDetailsComponent},
{path:'login', component:LoginComponent},
{path:'header', component: HeaderComponent},
{path:'footer', component:FooterComponent},
{path:'**', redirectTo:'/aboutus', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

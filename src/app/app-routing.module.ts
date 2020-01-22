import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/shared/aboutus/aboutus.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';


const routes: Routes = [
{path:'', redirectTo:'/aboutus', pathMatch:'full'},
{path:'aboutus', component:AboutusComponent},
{path:'header', component: HeaderComponent},
{path:'footer', component:FooterComponent},
{path:'**', redirectTo:'/aboutus', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

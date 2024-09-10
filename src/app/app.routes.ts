import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [

  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "login", component:LoginComponent},
  {path:"productAdd", component:ProductAddComponent},
  {path:"products", component:ProductsComponent},


];

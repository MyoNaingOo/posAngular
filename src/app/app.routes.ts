import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductsComponent } from './component/products/products.component';

export const routes: Routes = [

  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "login", component:LoginComponent},
  {path:"productAdd", component:ProductAddComponent},
  {path:"products", component:ProductsComponent},


];

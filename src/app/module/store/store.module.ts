import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StoreModule { 

  id?:number;
  product?:ProductModule
  user?:UserModule
  quantity?:number;
  time?:any;
  update_quantity?:number;

}

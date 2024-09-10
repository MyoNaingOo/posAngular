import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { PriceModule } from '../price/price.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  id!: number;
  name!: string;
  price!: PriceModule;
  user?:UserModule;
  balance?: number;
  img!:string;
  description!: string;
  quantity ?: number=1;
  time?:any;
 }

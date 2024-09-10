import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})



export class SaleModule { 

  id?:number;
  user?:UserModule
  saleProList?: {
    product_id?:number
    quantity?:number
  }[]
  perishable?:boolean
  time?:any 
}

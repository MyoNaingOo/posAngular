import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PriceModule {
  id?:number
  product_id?:number
  org_price?:number
  promo_price?:number
  date?:any
  purchase_price?:number
 }

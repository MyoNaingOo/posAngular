import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  id!: number;
  name!: string;
  price!: number;
  img!:string;
  description!: string;
  quantity ?: number=1;

 }

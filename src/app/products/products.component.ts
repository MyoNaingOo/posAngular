import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  constructor(){
    initFlowbite();
  }


}

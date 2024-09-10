import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { initFlowbite } from 'flowbite';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faA, faAngleLeft, faAngleRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ProductModule } from '../module/product/product.module';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, FontAwesomeModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]


  products: ProductModule[] = [
    {
      id: 1,
      name: "Product1",
      price: {
        org_price: 1200,
        // promo_price: 1000,
      },
      description: "Product 1",
      img: "images/product1.png",
    },
    {
      id: 2,
      name: "Product2",
      price: {
        org_price: 1600,
        promo_price: 1000,
      }, description: "Product 2",
      img: "images/product2.png",
    },
    {
      id: 3,
      name: "Product3",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 3",
      img: "images/product3.png",
    }, {
      id: 4,
      name: "Product4",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 4",
      img: "images/product4.png",
    },
    {
      id: 5,
      name: "Product5",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 5",
      img: "images/product5.png",
    },
    {
      id: 6,
      name: "Product6",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 6",
      img: "images/product6.png",
    },
    {
      id: 7,
      name: "Product7",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 7",
      img: "images/product7.png",
    },
    {
      id: 8,
      name: "Product8",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 8",
      img: "images/product8.png",
    },
    {
      id: 9,
      name: "Product9",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 9",
      img: "images/product9.png",
    },
    {
      id: 10,
      name: "Product10",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 10",
      img: "images/product10.png",
    },
    {
      id: 11,
      name: "Product11",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 11",
      img: "images/product11.png",
    },
    {
      id: 12,
      name: "Product12",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 12",
      img: "images/product12.png",
    },
    {
      id: 13,
      name: "Product13",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 13",
      img: "images/product13.png",
    },
    {
      id: 14,
      name: "Product14",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 14",
      img: "images/product14.png",
    },
    {
      id: 15,
      name: "Product15",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 15",
      img: "images/product15.png",
    },
    {
      id: 16,
      name: "Product16",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 16",
      img: "images/product16.png",
    },
    {
      id: 17,
      name: "Product17",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 17",
      img: "images/product17.png",
    },
    {
      id: 18,
      name: "Product18",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 18",
      img: "images/product18.png",
    },
    {
      id: 19,
      name: "Product19",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 19",
      img: "images/product19.png",
    },
    {
      id: 20,
      name: "Product20",
      price: {
        org_price: 1200,
        promo_price: 1000,
      }, description: "Product 20",
      img: "images/product20.png",
    }

  ]

  ngOnInit(): void {
    initFlowbite();
  }


  findpro(e: NgForm) {
    console.log(e.value);
  }

  angle_left: any = faAngleLeft;
  angle_right: any = faAngleRight;
  minus: any = faMinus
  plus: any = faPlus
  total: any

  saleCard: ProductModule[] = []


  addProduct(product: ProductModule) {
    if (!this.saleCard.find(p => p.id === product.id)) {

      this.saleCard.push(
        { ...product, quantity: 1 }
      );
    }
  }


  sale() {
    console.log(this.saleCard)
  }

  clean() {
    this.saleCard = []
  }



  totalprices() {


    this.total = 0

    // this.saleCard.map(
    //   pro => {

    //     if (pro.promo_price == 0 || pro.promo_price == undefined ||
    //       pro.promo_price == null) {
    //       // <p>{{ product.org_price }}</p>
    //       if (pro.org_price != undefined)
    //         this.total = this.total + pro.org_price

    //     } else {
    //       // <p>{{ product.promo_price }}</p>
    //       this.total = this.total + pro.promo_price

    //     }

    //   }
    // )


  }



}

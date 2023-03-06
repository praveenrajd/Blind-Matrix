import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css'],
})
export class CartIconComponent implements OnInit {
  constructor() {}
  cartProductCount: any;
  @Input() addProductCart: any;
  @Input() cartCount: number;
  cartProducts: any = [];
  products: any;
  prodGot: any;
  totalQuantity: any;
  ngOnInit(): void {}
  ngOnChanges(): void {
    this.prodGot = localStorage.getItem('cartProducts');
    this.products = JSON.parse(this.prodGot);
    // condition to add the total quantity
    const totalQuantitys = this.products.reduce(
      (acc: any, product: any) => acc + product.quantity,
      0
    );

    this.totalQuantity = totalQuantitys;
  }
}

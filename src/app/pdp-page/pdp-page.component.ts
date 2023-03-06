import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdp-page',
  templateUrl: './pdp-page.component.html',
  styleUrls: ['./pdp-page.component.css'],
})
export class PdpPageComponent implements OnInit {
  selectedProduct: any = localStorage.getItem('selectedProduct');
  constructor(private router: Router) {}
  productCount: any;
  productPrice: any;
  multiplyValue: any;
  priceUpdate: any;
  cartProducts: any = [];
  cartCount: number;
  ngOnInit(): void {
    this.selectedProduct = JSON.parse(this.selectedProduct);
    this.productCount = 1;
    this.productPrice = this.selectedProduct.price;
    this.multiplyValue = this.productPrice;
  }
  CountMinu() {
    if (this.productCount !== 1) {
      this.productCount = --this.productCount;
      this.multiplyValue = this.productPrice * this.productCount;
    }
  }
  CountPlus() {
    this.productCount = ++this.productCount;
    this.multiplyValue = this.productPrice * this.productCount;
  }

  addToCart(product: any, value2: any, quantity: any) {
    this.cartProducts = [];
    const cartDetails = {
      quantity: quantity,
      product_id: product.id,
      product: product,
      price: product.price,
    };
    let products = localStorage.getItem('cartProducts');
    if (products !== null) {
      this.cartProducts = JSON.parse(products);
      this.cartProducts.push(cartDetails);
    } else {
      this.cartProducts.push(cartDetails);
    }

    const updatedProducts: any = [];
    this.cartProducts.forEach((product: any) => {
      const index = updatedProducts.findIndex(
        (p: any) => p.product_id === product.product_id
      );

      if (index === -1) {
        updatedProducts.push(product);
      } else {
        updatedProducts[index].quantity += product.quantity;
      }
    });

    this.cartCount = updatedProducts;
    // Setting local storage
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
  }
}

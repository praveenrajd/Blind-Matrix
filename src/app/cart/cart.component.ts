import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productToCart: any = localStorage.getItem('productToCart');

  constructor() {}
  counts: any = {};
  updatedProduct: any;
  products: any;
  prodGot: any;
  cartCount: any;
  ngOnInit(): void {
    // get prouct and storing in varalble
    this.prodGot = localStorage.getItem('cartProducts');
    if (this.prodGot !== null) {
      this.products = JSON.parse(this.prodGot);

      this.products.forEach(
        (item: { quantity: number; product: { price: number } }) => {
          let totalPrice = item.quantity * item.product.price;
          item.product.price = totalPrice;
        }
      );
    }
  }

  // Decreate the value

  CountMinu(content: any) {
    if (content.quantity !== 1) {
      var UpdatedQuentity = content.quantity - 1;
      var priceUpdated = UpdatedQuentity * content.price;

      for (const item of this.products) {
        if (item.product_id === content.product_id) {
          item.product.price = priceUpdated;
          item.quantity = UpdatedQuentity;
        }
      }

      const updatedProducts: any = [];
      this.products.forEach((product: any) => {
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

  // Increae the value

  CountPlus(content: any) {
    var UpdatedQuentity = content.quantity + 1;
    var priceUpdated = UpdatedQuentity * content.price;

    for (const item of this.products) {
      if (item.product_id === content.product_id) {
        item.product.price = priceUpdated;
        item.quantity = UpdatedQuentity;
      }
    }

    const updatedProducts: any = [];
    this.products.forEach((product: any) => {
      const index = updatedProducts.findIndex(
        (p: any) => p.product_id === product.product_id
      );
      // Taking the count
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { strict } from 'assert';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css'],
})
export class PlpComponent implements OnInit {
  isAddProduct: boolean = false;
  selectedProd: any;
  public cartCount$: BehaviorSubject<any>;
  constructor(private service: ApiService, private router: Router) {}
  products: any;
  addProductCart: any;
  cartProducts: any = [];
  cartCount: number;

  ngOnInit(): void {
    this.service.productListPage().subscribe(
      (res: any) => {
        this.products = res;
      },
      (error: any) => {}
    );
  }
  addProduct() {
    this.isAddProduct = true;
  }
  editProduct(content: any) {
    this.isAddProduct = true;
    this.selectedProd = content;
  }

  closeEditpage(e: any) {
    if (e === false) {
      this.isAddProduct = false;
    }
  }

  pdpPage(content: any) {
    // Setting local storage
    localStorage.setItem('selectedProduct', JSON.stringify(content));
    return this.router.navigateByUrl('/pdpPage');
  }
  addToCart(content: any): void {
    this.cartProducts = [];
    const cartDetails = {
      quantity: 1,
      product_id: content.id,
      product: content,
      price: content.price,
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

    // Setting local storage
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));

    this.cartCount = updatedProducts;
  }
}

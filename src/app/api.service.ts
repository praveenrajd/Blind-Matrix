import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiServer = environment; // Server API URL

  productListPage() {
    const url = this.apiServer.apiUrl + this.apiServer.APIS.PRODUCT_LIST_PAGE;
    return this.http.get(url);
  }
  addNewProduct(
    productTitle: any,
    productPrice: any,
    productDes: any,
    productImg: any,
    productCat: any
  ) {
    const config = {
      title: productTitle,
      price: productPrice,
      description: productDes,
      image: productImg,
      category: productCat,
    };
    const url = this.apiServer.apiUrl + this.apiServer.APIS.PRODUCT_LIST_PAGE;
    return this.http.post(url, config);
  }
}

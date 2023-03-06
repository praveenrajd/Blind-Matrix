import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlpComponent } from './plp/plp/plp.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PdpPageComponent } from './pdp-page/pdp-page.component';
import { CartComponent } from './cart/cart.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, PlpComponent, AddProductComponent, PdpPageComponent, CartComponent, CartIconComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

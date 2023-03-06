import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { PdpPageComponent } from './pdp-page/pdp-page.component';
import { PlpComponent } from './plp/plp/plp.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'plp', component: PlpComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'pdpPage', component: PdpPageComponent },
  { path: 'cartPage', component: CartComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

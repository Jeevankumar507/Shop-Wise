import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent
  },
  {
    path: 'products',
    component: HomeComponent
  }, 
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: "productlisting",
    component: ProductListComponent
  },
  {
    path: "payment",
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

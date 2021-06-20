import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { Store } from './services/store.services';
import  ProductListView  from './views/productListView.component';
import { CartView } from './views/cartView.component';
import router from './router';
import { ShopPage } from './pages/shopPage.component';
import { CheckoutPage } from './pages/checkout.component';
import { DataService } from './shared/dataService';
import { LoginPage } from './pages/loginPage.component';
import { AuthActivator } from './services/authActivator.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
        AppComponent,
        ProductListView,
        CartView,
        ShopPage,
        CheckoutPage,
        LoginPage
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      router,
      FormsModule
    ],
    providers: [Store, AuthActivator, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
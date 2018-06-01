import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent} ,
  { path: 'cart', component: CartComponent} ,

];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

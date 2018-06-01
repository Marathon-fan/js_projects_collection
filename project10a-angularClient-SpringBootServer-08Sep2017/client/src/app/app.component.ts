import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map' ;
import { Http } from '@angular/http';
import { ProductService } from "./shared/product.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  //products: Array<Product> = [];
  products: Product[] = [];

  constructor(private productSvc: ProductService){}
  // constructor(private http: Http ) {
  // }

  ngOnInit() {
    this.productSvc.getProduct().subscribe(
        (data: Product[]) => {
          this.products = data;
        },
        (error) => console.log(error),
        () => console.log(this.products.length + " product(s) are retrieved")
      );
  }

  getProducts(): Product[] {
    return this.products;
  }
}

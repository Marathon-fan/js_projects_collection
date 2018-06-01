import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'; // import all operations including map

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProduct() {
    return this.http.get('/api/products')
      .map( (response: Response ) => {
          return response.json();
      })
      .catch( (error: Response) => {
         return Observable.throw('some error in getProduct() : ProductserviceService ');
       });
  }
}

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    //return this.http.post('https://fir-http-c1929.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://fir-http-c1929.firebaseio.com/data.json', servers, {headers: headers});

    // return an observable, not sending the message yet
  }

  getServers() {
    return this.http.get('https://fir-http-c1929.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ).catch(
        (error: Response) => {
          return Observable.throw('something went wrong'); // generate an Observable
        }
      )
      ;
  }

  getAppName() {
    return this.http.get('https://fir-http-c1929.firebaseio.com/AppName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      ;
  }

}

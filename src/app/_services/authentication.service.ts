import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {RequestOptions} from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
// import {noUndefined} from "@angular/compiler/src/util";
// import {User} from '../models/user';

import {ilisEnvironment} from 'app/../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  // private url: string = 'http://localhost:1123/api/User/Authentication';
  private url: string = ilisEnvironment.apiRoot + '/api/User/Authentication';
  private messgae: string;
  public token: string;
  public user: any;

  constructor(private http: Http,
              private router: Router,) {
    // set token if saved in local storage
    // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // let currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
    //  this.token = currentUser && currentUser.token;
  }

  getMessage(): string {
    return this.messgae;
  }

  /*login(username: string, password: string, module: string): Observable<boolean> {
   // return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
   let body: any = new URLSearchParams();
   body.set('pUserID', username);
   body.set('pPassword', password);
   body.set('pMoudle', module);

   let headers: any = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
   let options: any = new RequestOptions({headers: headers});

   return this.http.post(this.url, body, options)
   .map((response: Response) => {
   let status: number = response.json().message.status;
   this.user = response.json().user;

   if (status === 0) {
   localStorage.setItem('currentUser', JSON.stringify(this.user));


   localStorage.setItem('currentMoulde', JSON.stringify(module));
   // this._loadingService.register();
   this.router.navigate(['/']);
   // this._loadingService.resolve();

   return true;
   } else {
   this.messgae = response.json().message.errors[0];

   return false;
   }
   });
   }*/

  login(username: string, password: string, module: string): Observable<boolean> {
    localStorage.setItem('currentUser', JSON.stringify('IRENE'));
    localStorage.setItem('currentMoulde', JSON.stringify(module));
    this.router.navigate(['/']);
    this.messgae = 'SUCCESS!!';
    return Observable.of(false);;
  }


  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = undefined;
    localStorage.removeItem('currentUser');
  }

  private handleErrorObservable(error: Response | any): any {
    return Observable.throw(error.message || error);
  }

  private extractData(res: Response): any {
    let body: any = res.json();
    return body;
  }
}

/*
 import { Injectable } from '@angular/core';
 import { Http, Headers, Response } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

 @Injectable()
 export class AuthenticationService {
 constructor(private http: Http) { }

 login(username: string, password: string) {
 return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
 .map((response: Response) => {
 // login successful if there's a jwt token in the response
 let user: any = response.json();
 if (user && user.token) {
 // store user details and jwt token in local storage to keep user logged in between page refreshes
 localStorage.setItem('currentUser', JSON.stringify(user));
 }
 });
 }

 logout() {
 // remove user from local storage to log user out
 localStorage.removeItem('currentUser');
 }
 }
 */

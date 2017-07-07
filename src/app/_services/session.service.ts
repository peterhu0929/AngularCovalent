 import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User, USERS} from '../_models/index';

@Injectable()
export class SessionService {
  private user: USERS ;
  private moudle: string;
  constructor(private http: Http) { }

  getUser(): USERS {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    return this.user;
  }

  getMoudle(): string {
    this.moudle = JSON.parse(localStorage.getItem('currentMoulde'));
    return this.moudle;
  }
    // private helper methods

}

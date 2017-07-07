import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainService} from './main-service.service';

import {SessionService} from '../_services/session.service';

import { User, USERS} from '../_models/index';
import {IState} from '../services/state.model';
import {Store} from '@ngrx/store';
import {USER_LOGGED_OUT} from '../services/app.reducer';
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
 user: USERS;
 moudle: string;
  routes: Object[];
  selectedRoute: Object[];

  constructor(
    private _router: Router,
    private mainService: MainService,
    private sessionService: SessionService,
    private store: Store<IState>,
    private authenticationService: AuthenticationService,) {
  }

  ngOnInit(): void {
    this.mainService.getMenuDatas().then((x: any) => this.routes = x.userMenu.menu);
    this.user = this.sessionService.getUser();
    this.moudle = JSON.parse(localStorage.getItem('currentMoulde'));
  }
  logout(): void {
    this._router.navigate(['/login']);
    this.store.dispatch({type: USER_LOGGED_OUT});
    this.authenticationService.logout();
  }
}

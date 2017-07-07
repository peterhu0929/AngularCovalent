import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {INCREMENT, DECREMENT, RESET, USER_LOGGED_IN, USER_LOGGED_OUT} from '../services/app.reducer';
import {IState} from '../services/state.model';
import {Store} from '@ngrx/store';
import {AutoLogoutService} from "../services/auto-logout.service";

@Injectable()
export class AppSessionService {
  counter$: Observable<number>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<IState>,
              private  autoLogoutService: AutoLogoutService,
  )
  {
    this.counter$ = store.select('counter') as Observable<number>;
    this.loggedIn$ = store.select('loggedIn') as Observable<boolean>;
  }

  login(): void {
    this.store.dispatch({type: USER_LOGGED_IN});
  }
}

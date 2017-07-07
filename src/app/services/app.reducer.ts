/**
 * Created by winston.ws.lu on 2017/6/21.
 */
import {ActionReducer, Action} from '@ngrx/store';
import {IState, initialState} from './state.model';
import { Router } from '@angular/router';

export const INCREMENT: any = 'INCREMENT';
export const DECREMENT: any = 'DECREMENT';
export const RESET: any = 'RESET';
export const USER_LOGGED_IN: any = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT: any = 'USER_LOGGED_OUT';

// This is the action fired when the activity timeout occured.
// We keep it generic so the reducer can take any number  /
// of actions based on it (including perhaps none)
//
export const ACTIVITY_TIMEOUT_OCCURRED: any = 'ACTIVITY_TIMEOUT_OCCURRED';

export function appReducerAction(state: IState, action: Action)
{
  switch (action.type)
  {
    case INCREMENT:
      return {
        counter: state.counter + 1,
        loggedIn: state.loggedIn,
      } as IState;

    case DECREMENT:
      return {
        counter: state.counter - 1,
        loggedIn: state.loggedIn,
      } as IState;

    case RESET:
      return {
        counter: 0,
        loggedIn: state.loggedIn,
      } as IState;

    case USER_LOGGED_IN:
      return {
        counter: state.counter,
        loggedIn: true,
      } as IState;

    case USER_LOGGED_OUT:
    case ACTIVITY_TIMEOUT_OCCURRED:
      return {
        counter: state.counter,
        loggedIn: false,
      } as IState;

    default:
      return state;
  }
}

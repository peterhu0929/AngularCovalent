/**
 * Created by winston.ws.lu on 2017/6/21.
 */
export const initialState: IState = {
  counter: 0,
  loggedIn: false,
};

export interface IState {
  counter: number;
  loggedIn: boolean;
}

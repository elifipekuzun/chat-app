import {ActionTypes} from '../action-types';

interface LoginAction {
  type: ActionTypes.login;
}

interface LoginSuccessAction {
  type: ActionTypes.login_success;
  payload: {
    username: string;
  };
}

interface LoginErrorAction {
  type: ActionTypes.login_error;
  payload: {
    error: string;
  };
}

export type Actions = LoginAction | LoginSuccessAction | LoginErrorAction;

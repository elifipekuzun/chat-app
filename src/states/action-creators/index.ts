import {Actions} from '../actions';
import {ActionTypes} from '../action-types';
import {Dispatch} from 'redux';

export const user_auth = (username: string) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({type: ActionTypes.login});
    try {
      dispatch({type: ActionTypes.login_success, payload: {username}});
    } catch (error) {}
  };
};

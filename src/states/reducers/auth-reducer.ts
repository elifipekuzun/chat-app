import {ActionTypes} from '../action-types';
import {Actions} from '../actions';

interface AuthState {
  loading: boolean;
  error: string | null;
  username: string | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  username: null,
};

const authReducer = (state = initialState, action: Actions): AuthState => {
  switch (action.type) {
    case ActionTypes.login:
      return {
        loading: true,
        error: null,
        username: null,
      };
    case ActionTypes.login_success:
      return {
        loading: false,
        error: null,
        username: action.payload.username,
      };
    case ActionTypes.login_error:
      return {
        loading: false,
        error: action.payload.error,
        username: null,
      };
    default:
      return state;
  }
};

export default authReducer;

import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {user_auth} from '../states/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({user_auth}, dispatch);
};

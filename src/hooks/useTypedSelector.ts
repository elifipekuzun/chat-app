import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {ReducersState} from '../states/reducers';

export const useTypedSelector: TypedUseSelectorHook<ReducersState> =
  useSelector;

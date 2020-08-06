import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from './rootState';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
import { combineReducers } from 'redux';

import { noteReducer } from './noteReducer';
import { orderReducer } from './orderReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  orders: orderReducer,
  notes: noteReducer,
})

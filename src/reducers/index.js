import { combineReducers } from 'redux';

import { noteReducer } from './noteReducer';
import { orderReducer } from './orderReducer';
import { currNoteReducer } from './currNoteReducer';
import { currOrderReducer } from './currOrderReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  orders: orderReducer,
  notes: noteReducer,
  currentNote: currNoteReducer,
  currentOrder: currOrderReducer,
})

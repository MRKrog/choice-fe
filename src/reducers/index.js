import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { noteReducer } from './noteReducer';
import { orderReducer } from './orderReducer';
import { currNoteReducer } from './currNoteReducer';
import { currOrderReducer } from './currOrderReducer';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  orders: orderReducer,
  notes: noteReducer,
  currentNote: currNoteReducer,
  currentOrder: currOrderReducer,
})

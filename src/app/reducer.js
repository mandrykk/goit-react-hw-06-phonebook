import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterChange } from './actions';

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => state.filter((item) => item.id !== payload),
});

const filter = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
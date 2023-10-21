import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './thunk';
import {
  handlerAddContactFulfilled,
  handlerDeleteContactFulfilled,
  handlerError,
  handlerFetchContactsFulfilled,
  handlerPendingAdd,
  handlerPendingDelete,
} from './builderAsyncReducers';

const arrayTHunk = [fetchContacts, deleteContact, addContact];
const handlerActionCreatorByStatus = type => {
  return arrayTHunk.map(item => item[type]);
};
const contactsInitialState = {
  items: [],
  isAdding: false,
  isDeleting: false,
  // isLoading: false,
  error: null,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlerFetchContactsFulfilled)
      .addCase(deleteContact.fulfilled, handlerDeleteContactFulfilled)
      .addCase(addContact.fulfilled, handlerAddContactFulfilled)
      .addCase(deleteContact.pending, handlerPendingDelete)
      .addCase(addContact.pending, handlerPendingAdd)
      .addMatcher(
        isAnyOf(...handlerActionCreatorByStatus('rejected')),
        handlerError
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
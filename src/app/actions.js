import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name:name,
      number:number,
    },
  };
});

export const deleteContact = createAction('contact/delete');

export const filterChange = createAction('contact/filter');
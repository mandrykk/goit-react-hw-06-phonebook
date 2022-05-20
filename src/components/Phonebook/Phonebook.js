import React, { useState } from 'react';
import styles from './Phonebook.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../app/actions';
import { getContact } from '../../app/selectors';
import { nanoid } from 'nanoid';


export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const addContactItem = ({ name, number }) => {
    const contact = {
      id: nanoid(), name, number,
    };
    
      if (contacts.find((item) => (item.name.toLowerCase()) === (contact.name.toLowerCase()))) {
      return alert(`Contact ${name} already exists`);
    }

    dispatch(addContact(name, number));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addContactItem({ name, number });
    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    };
  };


 return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>Phone</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\styles]?\(?\d{1,3}?\)?[-.\styles]?\d{1,4}[-.\styles]?\d{1,4}[-.\styles]?\d{1,9}"
              value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </>
  )
}
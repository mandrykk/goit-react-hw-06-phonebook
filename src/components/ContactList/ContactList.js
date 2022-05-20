import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { getAllContacts } from '../../app/selectors';

export default function Contacts() {
  const contacts = useSelector(getAllContacts);

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id} />
        </li>
      ))}
    </ul>
  )
}
import styles from './ContactList.module.css';

import { useSelector, useDispatch} from 'react-redux';
import { getAllContacts } from '../../app/selectors';
import { deleteContact } from '../../app/actions';

export default function Contacts() {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <span className={styles.span}>
            {contact.name}:{contact.number}
          </span>
          <button type="button"
            className={styles.button}
            onClick={() => dispatch(deleteContact(contact.id))}>
            Delete ❌
          </button>
        </li>
      ))}
    </ul>
  )
}
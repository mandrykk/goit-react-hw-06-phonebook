import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';

import { filterChange } from '../../app/actions';
import { getFilter } from '../../app/selectors';
    
export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const setFilter = (e) =>
    dispatch(filterChange(e.currentTarget.value)
  );

  return (
    <label htmlFor="name" className={styles.label}>
      <span className={styles.span}>Find contacts by name</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onInput={setFilter}
      />
    </label>
  )
}

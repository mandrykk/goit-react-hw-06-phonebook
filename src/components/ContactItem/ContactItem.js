import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { deleteContact } from '../../app/actions';

export default function ContactItem({name, number, id}) {
    const dispatch = useDispatch();
    
    return (
        <>
            <span className={styles.span}>
                {name}:{number}
            </span>
            <button type="button"
                className={styles.button}
                onClick={() => dispatch(deleteContact(id))}>
                Delete ❌
            </button>
        </>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
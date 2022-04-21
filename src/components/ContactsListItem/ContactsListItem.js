import styles from './ContactsListItem.module.css';
import { useDeleteContactMutation } from '../../redux/contacts';

function ContactsListItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={styles.listItem}>
      <span className={styles.contactName}>{contact.name}:</span>
      <span>{contact.phone}</span>

      <button
        type="button"
        id={contact.id}
        className={styles.button}
        onClick={() => deleteContact(contact.id)}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
}

export default ContactsListItem;

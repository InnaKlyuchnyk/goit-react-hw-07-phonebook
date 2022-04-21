import styles from './ContactsList.module.css';
import ContactsListItem from '../ContactsListItem';

function ContactsList({ contacts }) {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactsList;

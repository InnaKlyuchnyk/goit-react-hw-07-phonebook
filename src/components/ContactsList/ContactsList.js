import styles from './ContactsList.module.css';
import ContactsListItem from '../ContactsListItem';
import { useGetContactsQuery } from '../../redux/contacts';
import { useSelector } from 'react-redux';

function ContactsList() {
  const { data } = useGetContactsQuery();
  const filterValue = useSelector(state => state.filter.value.toLowerCase());

  const getFilteredNames = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <ul className={styles.list}>
      {getFilteredNames().map(contact => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactsList;

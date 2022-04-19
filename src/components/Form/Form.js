import styles from './Form.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../../redux/contacts/reducer';

function Form() {
  //   const dispatch = useDispatch();
  //   const contacts = useSelector(state => state.items);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    console.log('name', name);
    console.log('number', number);

    //   if (
    //     !contacts.find(
    //       contact => contact.name.toLowerCase() === name.toLowerCase()
    //     )
    //   ) {
    //     dispatch(add(name, number));
    //   } else {
    //     alert(`${name} is already in contacts`);
    //   }
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        {' '}
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={styles.label}>
        {' '}
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default Form;

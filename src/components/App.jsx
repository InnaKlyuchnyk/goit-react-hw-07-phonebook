import Section from './Section';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from '../redux/contacts';

export const App = () => {
  const { data } = useGetContactsQuery();

  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        {data && <ContactsList />}
      </Section>
      <Toaster />
    </div>
  );
};

import Section from './Section';
import Form from './Form';
import ContactsList from './ContactsList';
import { Toaster } from 'react-hot-toast';
import { useGetContactsQuery } from '../redux/contacts';

export const App = () => {
  const { data } = useGetContactsQuery();

  return (
    <div>
      <Section title="Phonebook">
        <Form contacts={data} />
      </Section>

      <Section title="Contacts">
        {data && <ContactsList contacts={data} />}
      </Section>
      <Toaster />
    </div>
  );
};

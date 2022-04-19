import Section from './Section';
import Form from './Form';
import { useGetContactsQuery } from '../redux/contacts';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery({
    refetchOnFocus: true,
  });

  return (
    <div>
      <Section title="Phonebook">
        <Form></Form>
      </Section>

      <Section title="Contacts">
        {/* <Filter />
        <PhonebookList /> */}
      </Section>
    </div>
  );
};

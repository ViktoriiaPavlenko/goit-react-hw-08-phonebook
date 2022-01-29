import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contacts/contacts-reducer';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import ContactsListItem from './ContactsListItem';
import styles from './ContactsList.module.css';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  const getFilteredContacts = contacts =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );

  const filteredContacts = data ? getFilteredContacts(data) : [];

  return (
    <>
      <ul className={styles.list}>
        {data &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactsListItem
              key={id}
              contactId={id}
              name={name}
              phoneNumber={number}
            />
          ))}
      </ul>
    </>
  );
}

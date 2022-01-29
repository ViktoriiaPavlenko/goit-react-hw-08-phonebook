import { useState } from 'react';
import {
  useDeleteContactMutation,
  useEditContactMutation,
} from '../../redux/contacts/contacts-reducer';
import { IoTrashBinOutline } from 'react-icons/io5';
import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

export default function ContactsListItem({ id, name, phoneNumber }) {
  const [changingContact, setChangingContact] = useState(false);
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phoneNumber);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [editContact, { isLoading: isEditing }] = useEditContactMutation();

  const editHandler = () => {
    editContact({
      changedContact: { name: contactName, number: contactPhone },
      id,
    });
    setChangingContact(false);
  };

  return (
    <>
      <li className={styles.item}>
        {!changingContact ? (
          <>
            <span className={styles.info}>
              {name}: {phoneNumber}
            </span>
            <button
              className={styles.button}
              type="button"
              onClick={() => setChangingContact(true)}
            >
              {isEditing ? (
                <BallTriangle height="20" width="40" color="beige" />
              ) : (
                <p>Edit</p>
              )}
            </button>
          </>
        ) : (
          <>
            <input
              value={contactName}
              onChange={e => setContactName(e.target.value)}
            />
            <input
              value={contactPhone}
              autoFocus
              onChange={e => setContactPhone(e.target.value)}
            />
            <button type="button" onClick={() => editHandler()}>
              Done
            </button>
          </>
        )}

        <button
          className={styles.button}
          type="button"
          onClick={() => deleteContact(id)}
        >
          {isDeleting ? (
            <BallTriangle height="20" width="40" color="beige" />
          ) : (
            <IoTrashBinOutline />
          )}
        </button>
      </li>
      {/* <li className={styles.item}>
        <span className={styles.info}>
          {name}: {phoneNumber}
        </span>
        {isLoading ? (
          <button
            className={styles.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            <BallTriangle height="20" width="40" color="beige" />
          </button>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            <IoTrashBinOutline />
          </button>
        )}
      </li> */}
    </>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

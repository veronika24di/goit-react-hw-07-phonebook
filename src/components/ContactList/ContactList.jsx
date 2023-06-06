import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button/Button';
import styles from './ContactList.module.css';
import { deleteContact } from 'redux/operations';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={styles.item}>
      {contacts.map(i => {
        return (
          <li key={i.id} className={styles.list}>
            {i.name}: {i.phone}{' '}
            <Button handleDeleteCard={() => dispatch(deleteContact(i.id))} />
          </li>
        );
      })}
    </ul>
  );
};
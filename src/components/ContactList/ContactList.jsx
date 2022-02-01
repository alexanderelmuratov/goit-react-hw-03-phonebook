import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactSet } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <ContactSet>
    {contacts.map(contact => (
      <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </ContactSet>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

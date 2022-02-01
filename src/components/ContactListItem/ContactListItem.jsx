import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactSetUnit,
  ContactInfo,
  DeleteButton,
} from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { id, name, number },
  onDelete,
}) => (
  <ContactSetUnit>
    <ContactInfo>
      {name}: {number}
    </ContactInfo>
    <DeleteButton type="button" onClick={() => onDelete(id)}>
      Delete
    </DeleteButton>
  </ContactSetUnit>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

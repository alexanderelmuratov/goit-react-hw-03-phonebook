import React from 'react';
import PropTypes from 'prop-types';
import { PhonebookSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <PhonebookSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </PhonebookSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

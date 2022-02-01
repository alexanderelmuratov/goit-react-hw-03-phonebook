import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { ContactsTitle, ContactsError } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = data => {
    const existingContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existingContacts) {
      return toast.error(`${data.name} is already in contacts!`);
    }
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
    toast.success(`${data.name} added to contacts!`);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  searchContact = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <GlobalStyle />
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter value={this.state.filter} onChange={this.searchContact} />
          {visibleContacts.length !== 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          ) : (
            <ContactsError>There's no information</ContactsError>
          )}
        </Section>
        <Toaster />
      </>
    );
  }
}

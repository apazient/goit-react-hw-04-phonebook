import React from 'react';

import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useState, useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitForm = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };
    blockEdding(name) &&
      setContacts(prevContacts => {
        return [...prevContacts, newContact];
      });
  };

  const deleteContact = data => {
    console.log('deleteContactState', contacts);
    setContacts(prev => {
      return prev.filter(el => el.id !== data);
    });
  };

  const blockEdding = name => {
    let existContact = [];
    contacts.map(el => {
      return existContact.push(el.name);
    });
    return existContact.includes(name)
      ? alert('This Contact alredy exist')
      : true;
  };

  return (
    <div
      style={{
        display: 'block',
        margin: '0 auto',
        padding: '12px 16px',
        borderRadius: 4,
        border: '1px solid gray',
        width: '380px',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm onSubmit={submitForm} />
      <h2>Contacts</h2>
      <Filter value={filter} setFilter={setFilter}></Filter>
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
}

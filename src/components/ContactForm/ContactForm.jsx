import React from 'react';

import PropTypes from 'prop-types';

import style from './ContactForm.module.css';
import { useState } from 'react';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    console.log();
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Value not found');
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number" className={style.label}>
        Name
      </label>
      <div className={style.form}>
        <input
          className={style.input}
          type="text"
          name="name"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

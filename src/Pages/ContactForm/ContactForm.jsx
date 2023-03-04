import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';


export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleCangeForm = event => {
        const { name, value } = event.target;
        if (name === 'name') setName(value);
        if (name === 'phone') setPhone(value);
    };

    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();
        const contact = {
            id: nanoid(),
            name,
            phone,
        };
        if (!name || !phone) {
            alert('Some filed is empty');
            return false;
        }

        dispatch(addContact(contact));

        resetForm();
    };

    const resetForm = () => {
        setName('');
        setPhone('');
    };

    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleCangeForm}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={handleCangeForm}
                />
                <button type="submit">Add contact</button>
            </form>
        </>
    );
};

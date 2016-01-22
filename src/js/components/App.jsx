import React from 'react';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';

export default () => {
    return (
        <div>
            <h1>Contact List</h1>
            <AddContactForm />
            <ContactList />
        </div>
    );
};

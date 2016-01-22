import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../action_creators';

const AddContactForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" />
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text" />
            <label htmlFor="age">Age</label>
            <input name="age" type="number" />
            <input type="submit" value="Submit" />
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (e) => {
            e.preventDefault();
            let { firstName, lastName, age } = e.target;
            dispatch(addContact(firstName.value, lastName.value, age.value));
        },
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AddContactForm);

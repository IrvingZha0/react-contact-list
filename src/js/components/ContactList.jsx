import React from 'react';
import { connect } from 'react-redux';
import Contact from './ContactRow';

const ContactList = ({ contacts }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {contacts.map((contact, i) => <Contact key={i} {...contact} />)}
            </tbody>
        </table>
    );
};

const mapStateToProps = ({ contacts }) => {
    return {
        contacts,
    };
};

export default connect(
    mapStateToProps
)(ContactList);

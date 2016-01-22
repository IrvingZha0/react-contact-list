import React from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../action_creators';

const ContactRow = ({ firstName, lastName, age, id, dispatch }) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>
                <button onClick={() => {
                    dispatch(removeContact(id));
                }}>Delete</button>
            </td>
        </tr>
    );
};

export default connect()(ContactRow);

import React from 'react';

export default ({ firstName, lastName, age}) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
        </tr>
    );
};

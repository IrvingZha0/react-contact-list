export function setContacts(contacts) {
    return {
        type: 'SET_CONTACTS',
        contacts,
    };
}

export function addContact(firstName, lastName, age) {
    return {
        type: 'ADD_CONTACT',
        contact: {
            firstName,
            lastName,
            age,
        },
    };
}

export function removeContact(id) {
    return {
        type: 'REMOVE_CONTACT',
        id,
    };
}

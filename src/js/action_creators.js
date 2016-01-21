export function setState(state) {
    return {
        type: 'SET_STATE',
        state,
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

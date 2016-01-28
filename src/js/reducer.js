import { Map, List } from 'immutable';

const initialState = Map({
    contacts: List(),
});

function setContacts(state, contacts) {
    return state.set('contacts', contacts);
}

function addContact(state, contact) {
    return state.updateIn(['contacts'], c => c.push(contact));
}

function removeContact(state, id) {
    return state.updateIn(['contacts'], c => c.delete(id));
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return setContacts(state, action.contacts);
        case 'ADD_CONTACT':
            return addContact(state, action.contact);
        case 'REMOVE_CONTACT':
            return removeContact(state, action.id);
    }
    return state;
}

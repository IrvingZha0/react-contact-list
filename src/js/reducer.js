import { Map, List } from 'immutable';

const initialState = Map({
    contacts: List(),
});

function setState(state, newState) {
    return state.merge(newState);
}

function addContact(state, contact) {
    return state.updateIn(['contacts'], c => c.push(contact));
}

function removeContact(state, id) {
    return state.updateIn(['contacts'], c => c.delete(id));
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'ADD_CONTACT':
            return addContact(state, action.contact);
        case 'REMOVE_CONTACT':
            return removeContact(state, action.id);
    }
    return state;
}

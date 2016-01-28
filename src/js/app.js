import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer';
import { setContacts } from './action_creators';
import App from './components/App';
import { fromJS } from 'immutable';

let body = document.querySelector('body');
let appContainer = document.createElement('div');
appContainer.setAttribute('id', 'app');
body.appendChild(appContainer);

const store = createStore(reducers);

fetch('http://localhost:3000/api/contacts')
    .then(res => res.json())
    .then(contacts => {
        store.dispatch(setContacts(fromJS(contacts)));
    });

const application = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(application, appContainer);

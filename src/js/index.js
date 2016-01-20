import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer';
import { setState } from './action_creators';
import App from './components/App';

let body = document.querySelector('body');
let appContainer = document.createElement('div');
appContainer.setAttribute('id', 'app');
body.appendChild(appContainer);

const store = createStore(reducers);

store.dispatch(setState({
    contacts: [
        {
            firstName: 'Alex',
            lastName: 'Sears',
            age: 26,
        },
        {
            firstName: 'Stephanie',
            lastName: 'Holtgrefe',
            age: 25,
        },
        {
            firstName: 'Marissa',
            lastName: 'Sears',
            age: 22,
        },
        {
            firstName: 'Elijah',
            lastName: 'Sears',
            age: 19,
        },
    ],
}));

const application = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(application, appContainer);

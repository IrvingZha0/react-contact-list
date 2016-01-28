'use strict';

import Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

const contacts = [
    {
        id: 1,
        firstName: 'Alex',
        lastName: 'Sears',
        age: 26,
    },
    {
        id: 7,
        firstName: 'Stephanie',
        lastName: 'Holtgrefe',
        age: 25,
    },
    {
        id: 23,
        firstName: 'Marissa',
        lastName: 'Sears',
        age: 22,
    },
    {
        id: 400,
        firstName: 'Elijah',
        lastName: 'Sears',
        age: 19,
    },
];

function findUser(id) {
    return contacts.find(c => c.id === id);
}

server.route({
    method: 'GET',
    path: '/api/contacts',
    handler: (request, reply) => {
        reply(contacts);
    },
});

server.route({
    method: 'GET',
    path: '/api/contacts/{id}',
    handler: (request, reply) => {
        const id = parseInt(request.params.id, 10);
        const contact = findUser(id);
        if (!contact) {
            return reply('Contact not found').code(404);
        }
        reply(contact);
    },
});

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'build',
            },
        },
    });
});

server.start(() => {
    console.log(`Server running at ${server.info.uri}.`);
});

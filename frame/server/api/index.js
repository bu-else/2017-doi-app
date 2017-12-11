'use strict';


exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply({ message: 'Welcome to the plot device.' });
        }
    });

    server.route({
        method: 'GET',
        path: '/test',
        handler: function (request, reply) {

            reply({ message: 'Welcome to the plot device test.' });
        }
    });

    next();
};


exports.register.attributes = {
    name: 'index'
};

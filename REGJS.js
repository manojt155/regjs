var Hapi = require('hapi');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([{
register: Inert,
options: {}
},{
register: Scooter,
options: {}
},{
register: Blankie,
options: {frameAncestors: '*'}
}], var Hapi = require('hapi');
var Blankie = require('blankie');
var Scooter = require('scooter');
const Inert = require('inert');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([{
register: Inert,
options: {}
},{
register: Scooter,
options: {}
}], function (err) {
if (err) {
throw err;
}
});

server.route({
method: 'GET',
path: '/noscripthere',
config: {
handler: function (request, reply) {
reply('these settings are changed');
},
plugins: {
blankie: {
objectSrc: '*'
}
}
}
});

server.start(function () {
console.log('info', 'Server running at: ' + server.info.uri);
});
function (err) {
if (err) {
throw err;
}
});

server.route({
method: 'GET',
path: '/',
handler: function (request, reply) {
reply('Test negative for frameAncestors *');
}
});

server.start(function () {
console.log('info', 'Server running at: ' + server.info.uri);
});
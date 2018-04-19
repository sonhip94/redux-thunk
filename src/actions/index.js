const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');

const app = feathers();

const restClient = rest('http://localhost:3030');

export const client = app.configure(restClient.fetch(window.fetch));








// As we move to into deployment, this value will not
// be hard-coded, but instead come from environment configuration
const DATABASE_URL = 'postgres://localhost:5432/portland_houses';
const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;
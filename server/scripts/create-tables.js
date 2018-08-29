// "require" pg
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// database url
const databaseUrl = 'postgres://localhost:5432/portland_houses';
// on windows, linux, or other systems where you need to 
// specify username and password
// const databaseUrl = 'postgres://<username>:<password>@localhost:5432/liveable_cities';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS houses (
        id SERIAL PRIMARY KEY,
        address VARCHAR(256) NOT NULL,
        property_id VARCHAR(256) NOT NULL,
        owner VARCHAR(256) NOT NULL,
        square_feet INTEGER NOT NULL,
        sale_date VARCHAR(256) NOT NULL,
        sale_price INTEGER NOT NULL,
        year_built INTEGER NOT NULL
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
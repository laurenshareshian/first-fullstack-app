const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS quadrants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    direction VARCHAR(8) UNIQUE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS houses (
    id SERIAL PRIMARY KEY,
    address VARCHAR(256) NOT NULL,
    property_id VARCHAR(256) NOT NULL,
    owner VARCHAR(256) NOT NULL,
    square_feet INTEGER NOT NULL,
    market_value INTEGER NOT NULL,
    sale_date VARCHAR(256) NOT NULL,
    sale_price INTEGER NOT NULL,
    year_built INTEGER NOT NULL,
    quadrant_id INTEGER NOT NULL REFERENCES quadrants(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS houses;
    DROP TABLE IF EXISTS quadrants;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
const client = require('../db-client');
// okay to import "json", you will get JavaScript objects :)
const quadrants = require('./quadrants.json');

Promise.all(
  quadrants.map(quadrant => {
    return client.query(`
        INSERT INTO quadrants (name, direction)
        VALUES ($1, $2);
    `,
    [quadrant.name, quadrant.direction]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
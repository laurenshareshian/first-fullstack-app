const client = require('../db-client');
// okay to import "json", you will get JavaScript objects :)
const houses = require('./houses.json');

Promise.all(
  houses.map(house => {
    return client.query(`
      INSERT into houses (
        quadrant_id, address, property_id, owner, square_feet, market_value, sale_date, sale_price, year_built
      ) 
      SELECT
        id as quadrant_id,
        $1 as address,
        $2 as property_id,
        $3 as owner,
        $4 as square_feet,
        $5 as market_value,
        $6 as sale_date,
        $7 as sale_price,
        $8 as year_built
      FROM quadrants
      WHERE direction = $9;
    `,
    [house.address, house.property_id, house.owner, house.square_feet, 
      house.market_value, house.sale_date, house.sale_price,
      house.year_built, house.quadrant]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
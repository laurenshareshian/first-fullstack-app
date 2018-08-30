// basic express app
const express = require('express');
const app = express();

// logging
const morgan = require('morgan');
app.use(morgan('dev'));

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const client = require('./db-client');

// routes
app.get('/api/houses', (req, res) => {
  client.query(`
    SELECT 
      h.id,
      h.address, 
      h.property_id, 
      h.owner, 
      h.square_feet, 
      h.market_value,
      h.sale_date, 
      h.sale_price, 
      h.year_built,
      q.id as "quadrantId",
      q.name as quadrant
    FROM houses as h
    JOIN quadrants as q
    ON h.quadrant_id = q.id
    ORDER BY h.sale_price
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/houses/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      address, 
      property_id, 
      owner, 
      square_feet,
      market_value, 
      sale_date, 
      sale_price, 
      year_built,
      quadrant_id as "quadrantId"
    FROM houses
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

app.post('/api/houses', (req, res) => {
  console.log('posting');
  const body = req.body;
  client.query(`
    INSERT INTO houses (address, property_id, owner, square_feet, market_value, sale_date, sale_price, year_built, quadrant_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `,
  [body.address, body.property_id, body.owner, body.square_feet, body.market_value, body.sale_date, body.sale_price, body.year_built, body.quadrantId]
  )
    .then(result => {
      // we always get rows back, in this case we just want first one.
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.delete('/api/houses/:id', (req, res) => {
  console.log('deleting', req.params.id);
  client.query(`
    DELETE FROM houses
    WHERE id = $1
    RETURNING *;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log('here is your error', err));
  
});

app.put('/api/houses/:id', (req, res) => {
  console.log('posting');
  const body = req.body;
  client.query(`
    UPDATE houses
    SET address = $2, 
      property_id = $3, 
      owner = $4, 
      square_feet = $5, 
      market_value = $6,
      sale_date = $7, 
      sale_price = $8, 
      year_built = $9,
      quadrant_id = $10
    WHERE id = $1
    RETURNING *;
  `,
  [body.id, body.address, body.property_id, body.owner, body.square_feet, body.market_value, body.sale_date, body.sale_price, body.year_built, body.quadrantId]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

app.get('/api/quadrants', (req, res) => {
  client.query(`
    SELECT *
    FROM quadrants;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));
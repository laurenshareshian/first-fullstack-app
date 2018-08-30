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
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/portland_houses';
const client = new Client(databaseUrl);
client.connect();

// routes
app.get('/api/houses', (req, res) => {
  client.query(`
    SELECT 
      id,
      address, 
      property_id, 
      owner, 
      square_feet, 
      sale_date, 
      sale_price, 
      year_built
    FROM houses;
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
      sale_date, 
      sale_price, 
      year_built
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
    INSERT INTO houses (address, property_id, owner, square_feet, sale_date, sale_price, year_built)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `,
  [body.address, body.property_id, body.owner, body.square_feet, body.sale_date, body.sale_price, body.year_built]
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
      sale_date = $6, 
      sale_price = $7, 
      year_built = $8
    WHERE id = $1
    RETURNING *;
  `,
  [body.id, body.address, body.property_id, body.owner, body.square_feet, body.sale_date, body.sale_price, body.year_built]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));
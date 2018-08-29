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
    city,
    state,
    zip_code,
    county,
    neighborhood,
    property_id,
    state_id,
    parent_state_id,
    alt_account_number,
    owner,
    legal_description,
    square_feet,
    market_value,
    sale_date,
    sale_price,
    year_built,
    x_state_plane,
    y_state_plane,
    x_web_mercator,
    y_web_mercator,
    latitude,
    longitude,
    primary
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
    city,
    state,
    zip_code,
    county,
    neighborhood,
    property_id,
    state_id,
    parent_state_id,
    alt_account_number,
    owner,
    legal_description,
    square_feet,
    market_value,
    sale_date,
    sale_price,
    year_built,
    x_state_plane,
    y_state_plane,
    x_web_mercator,
    y_web_mercator,
    latitude,
    longitude,
    primary
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
    INSERT INTO houses (
      address,
      city,
      state,
      zip_code,
      county,
      neighborhood,
      property_id,
      state_id,
      parent_state_id,
      alt_account_number,
      owner,
      legal_description,
      square_feet,
      market_value,
      sale_date,
      sale_price,
      year_built,
      x_state_plane,
      y_state_plane,
      x_web_mercator,
      y_web_mercator,
      latitude,
      longitude,
      primary)
    VALUES ($1, $2, $3, $4, $5, 
      $6, $7, $8, $9, $10, 
      $11, $12, $13, $14, $15, 
      $15, $16, $17, $18, $19, 
      $20, $21, $22, $23, $24)
    RETURNING *;
  `,
  [body.address,
    body.city,
    body.state,
    body.zip_code,
    body.county,
    body.neighborhood,
    body.property_id,
    body.state_id,
    body.parent_state_id,
    body.alt_account_number,
    body.owner,
    body.legal_description,
    body.square_feet,
    body.market_value,
    body.sale_date,
    body.sale_price,
    body.year_built,
    body.x_state_plane,
    body.y_state_plane,
    body.x_web_mercator,
    body.y_web_mercator,
    body.latitude,
    body.longitude,
    body.primary]
  )
    .then(result => {
      // we always get rows back, in this case we just want first one.
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});


// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));
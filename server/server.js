// require the express module (installed via `npm i express`)
const express = require('express');

// make an express app. no "new" keyword ¯\_(ツ)_/¯
const app = express();

/* SERVER SETUP */

// import morgan for logging
const morgan = require('morgan');
app.use(morgan('dev'));

// import cors "middleware" to enable our server to do CORS
const cors = require('cors');
// register it
app.use(cors());

// register express "middleware" for converting incoming
// request body to deserialized request.body property
app.use(express.json());

/* TEMP DATABASE SOLUTION */

// temp solution to updating data...
const fs = require('fs');
// fs file paths are relative to pwd (cwd) aka where you started node
// path to data file:
const dataPath = 'data/houses.json';

function readData() {
  // convenient method for reading file.
  // DON'T ever use in production
  const raw = fs.readFileSync(dataPath);
  // make into js array with house objects
  const data = JSON.parse(raw);

  return data;
}

/* ROUTES */

// setup a "route":
// 1) HTTP METHOD, i.e. app.get === for GET requests
// 2) PATH, i.e. '/api/houses` === the requested path
app.get('/api/houses', (req, res) => {
  const data = readData();
  // send back the data:
  res.send(data);
});

// app.<method>(<path>, handler)
app.post('/api/houses', (req, res) => {
  const data = readData();
  data.push(req.body);
  // save file
  fs.writeFileSync(dataPath, JSON.stringify(data));

  res.send(req.body);
});

/* RUN THE SERVER */

// set the PORT on which to listen
const PORT = 3000;

// start "listening" (run) the app (server)
app.listen(PORT, () => console.log('app running...'));
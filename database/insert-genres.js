const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  require('dotenv').config();  
}
const axios = require('axios');

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/getmusiclive';

const client = new pg.Client(connectionString);
client.connect();

const EVENTBRITE_KEY = process.env.EVENTBRITE_KEY;
const EVENTBRITE_URL = 'https://www.eventbriteapi.com/v3/categories/103/?token=';
const url = `${EVENTBRITE_URL}${EVENTBRITE_KEY}`;

const insertGenres = (json) => {
  json.subcategories
    .forEach((genre, index) => {
      client.query(
        `INSERT INTO event_genres (id, event_genre, event_api_key)
        VALUES ($1, $2, $3)`, [index, genre.name, genre.id],
        (err) => {
          if (err) throw err;

        }            
      );
    });

  client.on('end', (err, result) => {
    if (err) console.log(err);

    console.log('Query results: ', result);
    client.end();
  });
};

const getGenres = () => {
  axios.get(url)
    .then(response => {
      insertGenres(response.data);
    });
};

module.exports = getGenres;

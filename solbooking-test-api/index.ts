import express from 'express'
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
import { hotelController } from './controller/hotel.controller';

let db = new sqlite3.Database('solbooking.db', (err: any) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/api/hotel', hotelController(db));

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(4000);
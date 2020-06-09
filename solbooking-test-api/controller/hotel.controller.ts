import express from 'express';
import sqlite3 from 'sqlite3';
import { hotelService } from '../services/hotel.service';
import { Hotel } from '../model/hotel';

const hotelRouter = express.Router();

export const hotelController = (db: sqlite3.Database) => {

    hotelRouter.route('/getHotelsByUserId/:userId')
        .get((req, res) => {

            hotelService.getHotelsByUserId(db, +req.params.userId).then((hotels) => {

                res.status(200).json(hotels);
            }).catch((err) => res.status(500).json(err));
        });

    return hotelRouter;
}

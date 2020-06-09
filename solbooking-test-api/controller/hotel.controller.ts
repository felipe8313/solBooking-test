import express from 'express';
import sqlite3 from 'sqlite3';
import { hotelService } from '../services/hotel.service';
import { Hotel } from '../model/hotel';
import { ServiceReturnCodes } from '../services/utils';

const hotelRouter = express.Router();

export const hotelController = (db: sqlite3.Database) => {

    hotelRouter.route('/getHotelsByUserId/:userId')
        .get((req, res) => {

            hotelService.getHotelsByUserId(db, +req.params.userId).then((hotels) => {

                res.status(200).json(hotels);
            }).catch((err) => res.status(500).json(err));
        });

    hotelRouter.route('/getHotelById/:hotelId')
        .get((req, res) => {

            hotelService.getHotelById(db, +req.params.hotelId).then((hotel) => {

                if (hotel) {
                    res.status(200).json(hotel);
                } else {
                    res.status(404).json();
                }
            }).catch((err) => res.status(500).json(err));
        });

    hotelRouter.route('/deleteHotel/:hotelId')
        .delete((req, res) => {

            hotelService.deleteHotel(db, +req.params.hotelId).then((result) => {

                if (result) {
                    res.status(200).json();
                }
            }).catch((err) => res.status(500).json(err));
        });

    hotelRouter.route('/updateHotel')
        .patch((req, res, next) => {

            const hotel: Hotel = {
                id: req.body.id,
                name: req.body.name,
                address: req.body.address,
                mail: req.body.mail,
                phone: req.body.phone
            };

            hotelService.updateHotel(db, hotel).then((result) => {
                
                switch(result) {
                    case ServiceReturnCodes.Ok:
                        res.status(200).json();
                    case ServiceReturnCodes.DuplicateData:
                        res.status(409).json(); // 409 - Conflict
                    case ServiceReturnCodes.Error:
                        res.status(500).json();
                    default:
                        break;
                }

            }).catch((err) => res.status(500).json(err));

        });

    hotelRouter.route('/createHotel')
        .post((req, res, next) => {

            const hotel: Hotel = {
                id: req.body.id,
                name: req.body.name,
                address: req.body.address,
                mail: req.body.mail,
                phone: req.body.phone
            };

            hotelService.createHotel(db, hotel, +req.body.userId).then((result) => {
                
                switch(result) {
                    case ServiceReturnCodes.Ok:
                        res.status(200).json();
                    case ServiceReturnCodes.DuplicateData:
                        res.status(409).json(); // 409 - Conflict
                    case ServiceReturnCodes.Error:
                        res.status(500).json();
                    default:
                        break;
                }

            }).catch((err) => res.status(500).json(err));

        });

    return hotelRouter;
}

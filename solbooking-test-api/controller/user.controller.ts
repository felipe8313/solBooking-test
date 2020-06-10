import express from 'express';
import sqlite3 from 'sqlite3';
import { userService } from '../services/user.service';

const userRouter = express.Router();

export const userController = (db: sqlite3.Database) => {

    userRouter.route('/doLogin')
        .get((req, res) => {
            
            userService.doLogin(db, req.query.username, req.query.password).then((user) => {

                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(500).json();
                }
                
            }).catch((err) => res.status(500).json(err));
        });

    return userRouter;
}
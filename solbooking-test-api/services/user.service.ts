import sqlite3 from 'sqlite3';
import { ServiceReturnCodes } from './utils';
import { User } from '../model/user';

const doLogin = (db: sqlite3.Database, username: any, password: any): Promise<User> => {

    const sql = `SELECT * FROM Users WHERE username = ? AND password = ?`;

    return new Promise((resolve, reject) => {

        db.get(sql, [username, password], (err, row) => {
            
            console.log('err', err);
            console.log('row', row);

            if (err || !row) {
                resolve(undefined);
            } else {
                resolve({
                    id: row.Id,
                    username: row.Username,
                    name: row.Name
                });
            }
        });
    });
}

export const userService = {
    doLogin
}
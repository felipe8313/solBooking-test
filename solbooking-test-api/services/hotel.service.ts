import sqlite3 from 'sqlite3';
import { Hotel } from '../model/hotel';

const getHotelsByUserId = (db: sqlite3.Database, userId: number): Promise<Hotel[]> => {

    const sql = `SELECT * FROM Hotels WHERE UserId = ?`;

    return new Promise((resolve, reject) => {
        db.all(sql, [userId], (err, rows) => {
            if (err) {
                reject(err);
            }

            resolve(rows.map((row): Hotel => ({
                id: row.Id,
                name: row.Name,
                address: row.Address,
                phone: row.Phone,
                mail: row.Mail
            })));
        });
    });
};

export const hotelService = {
    getHotelsByUserId
}
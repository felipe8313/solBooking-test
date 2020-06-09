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

const getHotelById = (db: sqlite3.Database, hotelId: number): Promise<Hotel> => {
    
    const sql = `SELECT * FROM Hotels WHERE Id = ?`
    
    return new Promise((resolve, reject) => {
        db.get(sql, [hotelId], (err, row) => {
            if (err) {
                reject(err);
            }

            if (!row) {
                resolve(undefined);
            } else {
                resolve({
                    id: row.Id,
                    name: row.Name,
                    address: row.Address,
                    phone: row.Phone,
                    mail: row.Mail
                });
            }
        });
    });
}

const deleteHotel = (db: sqlite3.Database, hotelId: number): Promise<boolean> => {
    
    const sql = `DELETE FROM Hotels WHERE Id = ?`
    
    return new Promise((resolve, reject) => {
        db.run(sql, [hotelId], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

export const hotelService = {
    getHotelsByUserId,
    getHotelById,
    deleteHotel
}
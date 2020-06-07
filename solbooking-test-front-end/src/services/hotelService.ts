import { Hotel } from '../model/hotel';
import { mockHotels } from './mockData';

const getHotelsByUser = (userId: number): Promise<Hotel[]> => {
    return Promise.resolve(mockHotels);
}

export const hotelService = {
    getHotelsByUser
}

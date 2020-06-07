import { Hotel } from '../model/hotel';
import { mockHotels } from './mockData';

const getHotelsByUser = (userId: number): Promise<Hotel[]> => {
    return Promise.resolve(mockHotels);
}

const removeHotel = (hotelId: number): Promise<Hotel[]> => {
    
    const hotels = mockHotels.filter((hotel) => hotel.id !== hotelId);

    return Promise.resolve(hotels);

}

export const hotelService = {
    getHotelsByUser,
    removeHotel
}

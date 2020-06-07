import { Hotel } from '../model/hotel';
import { mockHotels } from './mockData';

const getHotelsByUser = (userId: number): Promise<Hotel[]> => {
    return Promise.resolve(mockHotels);
}

const removeHotel = (hotelId: number): Promise<Hotel[]> => {
    
    const hotels = mockHotels.filter((hotel) => hotel.id !== hotelId);

    return Promise.resolve(hotels);
}

const getHotelById = (hotelId: number): Promise<Hotel> => {

    const hotel = mockHotels.filter((hotel) => hotel.id === hotelId);

    return Promise.resolve(hotel[0]);
}

const updateHotel = (hotel: Hotel): Promise<boolean> => {

    return Promise.resolve(true);
}

export const hotelService = {
    getHotelsByUser,
    removeHotel,
    getHotelById,
    updateHotel
}

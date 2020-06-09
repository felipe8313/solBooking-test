import { Hotel } from '../model/hotel';
import { mockHotels } from './mockData';
import { hotelsRoutes } from './apiRoutes';
import { requestConfig } from './helpers';

const getHotelsByUser = (userId: number): Promise<Hotel[]> => {
    const request: RequestInit = {
        ...requestConfig,
    };

    return fetch(hotelsRoutes.getHotelsByUserId.replace(':userId', userId.toString()), request)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Error loading hotels list');
        })
        .then(hotels => hotels);
}

const removeHotel = (hotelId: number): Promise<Hotel[]> => {
    
    const hotels = mockHotels.filter((hotel) => hotel.id !== hotelId);

    return Promise.resolve(hotels);
}

const getHotelById = (hotelId: number): Promise<Hotel> => {

    const request: RequestInit = {
        ...requestConfig,
    };

    return fetch(hotelsRoutes.getHotelById.replace(':hotelId', hotelId.toString()), request)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Error loading hotel');
        })
        .then(hotel => hotel);
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

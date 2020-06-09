import { Hotel } from '../model/hotel';
import { hotelsRoutes } from './apiRoutes';
import { requestConfig, apiMethods } from './helpers';

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

const deleteHotel = (hotelId: number): Promise<boolean> => {
    
    const request: RequestInit = {
        ...requestConfig,
        method: apiMethods.DELETE
    };

    return fetch(hotelsRoutes.deleteHotel.replace(':hotelId', hotelId.toString()), request)
        .then(response => {
            if (response.ok) {
                return Promise.resolve(true);
            }

            throw new Error('Error deleting hotel');
        })
        .then(result => result);
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
    deleteHotel,
    getHotelById,
    updateHotel
}

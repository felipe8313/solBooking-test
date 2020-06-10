import { Hotel } from '../model/hotel';
import { hotelRoutes } from './apiRoutes';
import { requestConfig, apiMethods } from './helpers';

const getHotelsByUser = (userId: number): Promise<Hotel[]> => {
    const request: RequestInit = {
        ...requestConfig,
    };

    return fetch(hotelRoutes.getHotelsByUserId.replace(':userId', userId.toString()), request)
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

    return fetch(hotelRoutes.deleteHotel.replace(':hotelId', hotelId.toString()), request)
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

    return fetch(hotelRoutes.getHotelById.replace(':hotelId', hotelId.toString()), request)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Error loading hotel');
        })
        .then(hotel => hotel);
}

const updateHotel = (hotel: Hotel): Promise<boolean> => {

    const request: RequestInit = {
        ...requestConfig,
        method: apiMethods.PATCH,
        body: JSON.stringify(hotel)
    };

    return fetch(hotelRoutes.updateHotel, request)
        .then(response => {
            if (response.ok) {
                return Promise.resolve(true);
            } else if (response.status === 409) {
                return Promise.resolve(false);
            }

            throw new Error('Error saving hotel');
        })
        .then(result => result);
}

const createHotel = (hotel: Hotel, userId: number): Promise<boolean> => {

    const request: RequestInit = {
        ...requestConfig,
        method: apiMethods.POST,
        body: JSON.stringify({ ...hotel, userId })
    };

    return fetch(hotelRoutes.createHotel, request)
        .then(response => {
            if (response.ok) {
                return Promise.resolve(true);
            } else if (response.status === 409) {
                return Promise.resolve(false);
            }

            throw new Error('Error creating hotel');
        })
        .then(result => result);
}

export const hotelService = {
    getHotelsByUser,
    deleteHotel,
    getHotelById,
    updateHotel,
    createHotel
}

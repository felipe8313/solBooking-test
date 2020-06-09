const serverURL = 'http://localhost:4000/api/';

const hotelsBasePath = `${serverURL}hotel/`;

export const hotelsRoutes = {
    getHotelsByUserId: `${hotelsBasePath}getHotelsByUserId/:userId`,
    getHotelById: `${hotelsBasePath}getHotelById/:hotelId`,
    deleteHotel: `${hotelsBasePath}deleteHotel/:hotelId`,
    updateHotel: `${hotelsBasePath}updateHotel`,
}
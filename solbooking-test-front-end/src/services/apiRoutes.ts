const serverURL = 'http://localhost:4000/api/';

const hotelsBasePath = `${serverURL}hotel/`;

export const hotelsRoutes = {
    getHotelsByUserId: `${hotelsBasePath}getHotelsByUserId/:userId`
}
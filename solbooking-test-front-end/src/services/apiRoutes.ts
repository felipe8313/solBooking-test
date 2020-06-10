const serverURL = 'http://localhost:4000/api/';

const hotelBasePath = `${serverURL}hotel/`;
const userBasePath = `${serverURL}user/`;

export const hotelRoutes = {
    getHotelsByUserId: `${hotelBasePath}getHotelsByUserId/:userId`,
    getHotelById: `${hotelBasePath}getHotelById/:hotelId`,
    deleteHotel: `${hotelBasePath}deleteHotel/:hotelId`,
    updateHotel: `${hotelBasePath}updateHotel`,
    createHotel: `${hotelBasePath}createHotel`,
}

export const userRoutes = {
    doLogin: `${userBasePath}doLogin?username=:username&password=:password`
}
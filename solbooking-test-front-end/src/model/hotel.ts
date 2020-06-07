export interface Hotel {
    id: number;
    name: string;
    address: string;
    phone: string;
    mail: string;
}

export const getDefaultHotel = (): Hotel => ({
    id: 0,
    name: '',
    address: '',
    phone: '',
    mail: ''
});
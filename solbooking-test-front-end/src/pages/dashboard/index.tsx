import React, { useState, useEffect, Fragment } from 'react';
import { Hotel } from '../../model/hotel';
import { hotelService } from '../../services/hotelService';
import { User } from '../../model/user';
import { HotelsTable } from './components/hotelsTable';
import { Filter } from './components/filter';
import { Paper } from '@material-ui/core';
import { toast } from 'react-toastify';

import './styles.scss';

interface Props {
    user: User;
}

export const DashboardPage = (props: Props) => {

    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
    const [filterText, setFilterText] = useState<string>("");

    useEffect(() => {
        hotelService.getHotelsByUser(props.user.id).then((hotels) => {
            setHotels(hotels);
            setFilteredHotels(hotels);
        });
    }, [props.user.id]);

    const onChangeFilterText = (newFilterText: string) => {
        var auxHotels = hotels.filter((hotel) => hotel.name.toLocaleUpperCase().includes(newFilterText.toLocaleUpperCase()));

        setFilterText(newFilterText);
        setFilteredHotels(auxHotels);
    }

    const removeHotel = (hotelId: number) => {

        if (window.confirm('¿Desea eliminar este hotel?')) {
            hotelService.removeHotel(hotelId).then((hotels) => {
                setHotels(hotels);
                setFilteredHotels(hotels);

                toast('Hotel eliminado correctamente', { type: 'success' });
            }).catch((_) => toast('Error al eliminar el hotel', { type: 'error' }));
        }
    }

    return (
        <Fragment>
            <Filter filterText={filterText} onChangeFilterText={onChangeFilterText} />
            <Paper elevation={2} className="hotelsListContainer">
                <h3>Listado de hoteles</h3>
                <HotelsTable hotels={filteredHotels} removeHotel={removeHotel} />
            </Paper>
        </Fragment>
    );

}
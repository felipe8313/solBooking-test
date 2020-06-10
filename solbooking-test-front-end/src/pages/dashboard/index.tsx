import React, { useState, useEffect, Fragment } from 'react';
import { Hotel } from '../../model/hotel';
import { hotelService } from '../../services/hotelService';
import { HotelsTable } from './components/hotelsTable';
import { Filter } from './components/filter';
import { Paper, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

import './styles.scss';
import { routes } from '../../utils/routes';
import { Header } from '../../common/components/header';

export const DashboardPage = () => {

    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
    const [filterText, setFilterText] = useState<string>("");

    const userId = sessionStorage.getItem('userId');

    const history = useHistory();

    useEffect(() => {
        getHotelList();
    }, []);

    const getHotelList = () => {
        hotelService.getHotelsByUser(+userId).then((hotels) => {
            setHotels(hotels);
            setFilteredHotels(hotels);
        }).catch((_) => toast('Error al obtener el listado de hoteles', { type: 'error' }));
    }

    const onChangeFilterText = (newFilterText: string) => {
        var auxHotels = hotels.filter((hotel) => hotel.name.toLocaleUpperCase().includes(newFilterText.toLocaleUpperCase()));

        setFilterText(newFilterText);
        setFilteredHotels(auxHotels);
    }

    const removeHotel = (hotelId: number) => {

        if (window.confirm('¿Desea eliminar este hotel?')) {
            hotelService.deleteHotel(hotelId).then((result) => {

                if (result) {
                    getHotelList();
                } else {
                    toast('Hotel eliminado correctamente', { type: 'success' });
                }

                toast('Hotel eliminado correctamente', { type: 'success' });
            }).catch((_) => toast('Error al eliminar el hotel', { type: 'error' }));
        }
    }

    const editHotel = (hotelId: number) => {
        history.push(routes.editHotel.replace(':id', hotelId.toString()));
    }

    const newHotel = (_: any) => {
        history.push(routes.editHotel.replace(':id', '0'));
    }

    return (
        <Fragment>
            <Header />
            <div className="container">
                <Filter filterText={filterText} onChangeFilterText={onChangeFilterText} />
                <div className="newHotelContainer">
                    <Button variant="contained" color="primary" onClick={newHotel} className="newHotelButton">
                        <AddIcon /> Nuevo hotel
                </Button>
                </div>
                <Paper elevation={2} className="hotelsListContainer">
                    <h3>Listado de hoteles</h3>
                    <HotelsTable
                        hotels={filteredHotels}
                        removeHotel={removeHotel}
                        editHotel={editHotel}
                    />
                </Paper>
            </div>
        </Fragment>
    );
}
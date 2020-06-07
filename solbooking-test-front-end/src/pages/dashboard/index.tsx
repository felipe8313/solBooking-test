import React, { useState, useEffect, Fragment } from 'react';
import { Hotel } from '../../model/hotel';
import { hotelService } from '../../services/hotelService';
import { User } from '../../model/user';
import { HotelsTable } from './components/table';
import { Filter } from './components/filter';
import { Paper } from '@material-ui/core';

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

    return (
        <Fragment>
            <Filter filterText={filterText} onChangeFilterText={onChangeFilterText} />
            <Paper elevation={2} className="hotelsListContainer">
                <h3>Listado de hoteles</h3>
                <HotelsTable hotels={filteredHotels} />
            </Paper>            
        </Fragment>
    );

}
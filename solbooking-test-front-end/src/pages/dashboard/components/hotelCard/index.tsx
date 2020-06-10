import React from 'react';
import { Card, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import { Hotel } from '../../../../model/hotel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import './styles.scss';

interface Props {
    hotel: Hotel;
    removeHotel(hotelId: number): void;
    editHotel(hotelId: number): void;
}

export const HotelCard = (props: Props) => {

    return (
        <Card className="card">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.hotel.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.hotel.address}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.hotel.phone}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.hotel.mail}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    aria-label="Editar hotel"
                    className="actionButton"
                    onClick={(_) => props.editHotel(props.hotel.id)}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    color="secondary"
                    aria-label="Eliminar hotel"
                    className="actionButton"
                    onClick={(_) => props.removeHotel(props.hotel.id)}
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
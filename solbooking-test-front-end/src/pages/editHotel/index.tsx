import React, { useState, useEffect, Fragment } from 'react';
import { Hotel, getDefaultHotel } from '../../model/hotel';
import { hotelService } from '../../services/hotelService';
import { Paper, TextField, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import { validateEmail } from '../../utils/validations';
import { routes } from '../../utils/routes';
import { Header } from '../../common/components/header';

export const EditHotel = (props: any) => {

    const [hotel, setHotel] = useState<Hotel>(getDefaultHotel());

    const history = useHistory();

    const userId = +sessionStorage.getItem('userId');

    const hotelId = +props.match.params.id;

    useEffect(() => {

        if (hotelId > 0) {
            hotelService.getHotelById(hotelId)
                .then((hotel) => setHotel(hotel))
                .catch((_) => toast('Error al obtener el hotel', { type: 'error' }));
        }

    }, [hotelId]);

    const editField = (event: any) => {

        const name = event.target.name;
        const value = event.target.value;

        setHotel({
            ...hotel,
            [name]: value
        });
    }

    const saveHotel = (_: any) => {

        if (hotel.name === '' || hotel.address === '' || hotel.phone === '' || hotel.mail === '') {

            toast('Todos los campos son obligatorios', { type: 'error' });
        } else if (!validateEmail(hotel.mail)) {

            toast('Introduzca un email correcto', { type: 'error' });
        } else {

            if (hotelId > 0) {
                updateHotel();
            } else {
                createHotel();
            }
        }
    }

    const updateHotel = () => {
        hotelService.updateHotel(hotel).then((result) => {

            if (result) {
                toast('Hotel guardado correctamente', { type: 'success' });
                history.push(routes.home);
            } else {
                toast('Ya existe un hotel con ese nombre', { type: 'error' });
            }

        }).catch((_) => toast('Error al guardar el hotel', { type: 'error' }));
    }

    const createHotel = () => {
        hotelService.createHotel(hotel, userId).then((result) => {

            if (result) {
                toast('Hotel guardado correctamente', { type: 'success' });
                history.push(routes.home);
            } else {
                toast('Ya existe un hotel con ese nombre', { type: 'error' });
            }

        }).catch((_) => toast('Error al guardar el hotel', { type: 'error' }));
    }

    return (
        <Fragment>
            <Header />
            <div className="container">
                {
                    hotel &&
                    (
                        <Paper elevation={2} className="container">
                            <TextField className="input" name="name" label="Nombre" value={hotel.name} onChange={editField} />
                            <TextField className="input" name="address" label="Dirección" value={hotel.address} onChange={editField} />
                            <TextField className="input" name="phone" label="Teléfono" value={hotel.phone} onChange={editField} />
                            <TextField className="input" name="mail" label="Mail" value={hotel.mail} onChange={editField} />
                            <div>
                                <Button variant="contained" color="primary" onClick={saveHotel}>
                                    Guardar
                            </Button>
                            </div>
                        </Paper>
                    )
                }
            </div>
        </Fragment>
    );

}
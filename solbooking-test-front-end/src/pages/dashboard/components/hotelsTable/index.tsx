import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { Hotel } from '../../../../model/hotel';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import './styles.scss';

interface Props {
    hotels: Hotel[];
    removeHotel(hotelId: number): void;
    editHotel(hotelId: number): void;
}

export const HotelsTable = (props: Props) => {

    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [page, setPage] = useState<number>(0);

    const handleChangePage = (_: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Mail</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (props.hotels.length > rowsPerPage
                            ? props.hotels.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : props.hotels
                        ).map((hotel) => (
                            <TableRow key={hotel.id}>
                                <TableCell>{hotel.id}</TableCell>
                                <TableCell>{hotel.name}</TableCell>
                                <TableCell>{hotel.address}</TableCell>
                                <TableCell>{hotel.phone}</TableCell>
                                <TableCell>{hotel.mail}</TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="Editar hotel"
                                        className="actionButton"
                                        onClick={(_) => props.editHotel(hotel.id)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        aria-label="Eliminar hotel"
                                        className="actionButton"
                                        onClick={(_) => props.removeHotel(hotel.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={5}
                            count={props.hotels.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                {`Bienvenido ${sessionStorage.getItem('userName')}`}
            </Typography>
        </Toolbar>
    </AppBar>
);
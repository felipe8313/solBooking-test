import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface Props {
    name: string;
}

export const Header = (props: Props) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                {`Bienvenido ${props.name}`}
          </Typography>
        </Toolbar>
    </AppBar>
);
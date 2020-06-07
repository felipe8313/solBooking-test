import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import './styles.scss';

interface Props {
    filterText: string;
    onChangeFilterText(text: string): void;
}

export const Filter = (props: Props) => {

    const changeFilterText = (event: any) => {
        props.onChangeFilterText(event.target.value);
    }

    return (
        <Paper elevation={2} className="filterContainer">
            <TextField id="filter" label="Búsqueda" value={props.filterText} onChange={changeFilterText} />
        </Paper>        
    );
}
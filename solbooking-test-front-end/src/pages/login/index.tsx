import React, { useState } from 'react';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import { userService } from '../../services/userService';
import { routes } from '../../utils/routes';
import { useHistory } from 'react-router-dom';

import './styles.scss';

const logo = require('../../assets/img/solbooking-logo.png');

export const LoginPage = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const history = useHistory();

    const onChangeUsername = (event: any) => {
        setUsername(event.target.value);
    }

    const onChangePassword = (event: any) => {
        setPassword(event.target.value);
    }

    const doLogin = (_: any) => {

        userService.doLogin(username, password).then((user) => {
            if (user) {

                sessionStorage.setItem('userId', user.id.toString());
                sessionStorage.setItem('userName', user.name);

                history.push(routes.home);
            }
        }).catch((_) => {
            setError('El nombre de usuario y/o password no son válidos');
        });
    }

    return (
        <div className="loginPage">
            <Paper elevation={2} className="loginContainer">
                <div className="loginForm">
                    <img src={logo} alt="Logo" className="logo" />
                    <TextField className="input" label="Usuario" value={username} onChange={onChangeUsername} />
                    <TextField type="password" className="input" label="Contraseña" value={password} onChange={onChangePassword} />
                    {
                        error &&
                        <Typography variant="body1" color="error">
                            {error}
                        </Typography>
                    }

                    <div className="loginButtonContainer">
                        <Button variant="contained" color="primary" onClick={doLogin}>
                            Login
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );

}
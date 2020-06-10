import React from 'react';
import './App.scss';
import { DashboardPage } from './pages/dashboard';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { EditHotel } from './pages/editHotel';
import { routes } from './utils/routes';
import { LoginPage } from './pages/login';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Router>
    <Route path={routes.root} exact={true} component={LoginPage} />
    <Route path={routes.editHotel} exact={true} component={EditHotel} />
    <Route path={routes.home} exact={true} component={DashboardPage} />
    <ToastContainer />
  </Router>

);

export default App;

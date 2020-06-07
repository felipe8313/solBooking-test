import React from 'react';
import './App.scss';
import { DashboardPage } from './pages/dashboard';
import { User } from './model/user';
import { Header } from './common/components/header';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { EditHotel } from './pages/editHotel';
import { routes } from './utils/routes';

const mockUser: User = {
  id: 1,
  name: 'Felipe Ruiz',
  password: '1234',
  username: 'FelipeRP'
}

const App = () => (
  <Router>
    <Header name={mockUser.name} />
    <div className="container">
      <Route path={routes.home} exact={true}>
        <DashboardPage user={mockUser} />
      </Route>
      <Route path={routes.editHotel} exact={true} component={EditHotel} />
    </div>
    <ToastContainer />
  </Router>

);

export default App;

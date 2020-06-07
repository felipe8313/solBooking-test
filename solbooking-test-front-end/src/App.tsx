import React, { Fragment } from 'react';
import './App.scss';
import { DashboardPage } from './pages/dashboard';
import { User } from './model/user';
import { Header } from './common/components/header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const mockUser: User = {
  id: 1,
  name: 'Felipe Ruiz',
  password: '1234',
  username: 'FelipeRP'
}

const App = () => (
  <Fragment>
    <Header name={mockUser.name} />
    <div className="container">
      <DashboardPage user={mockUser} />
    </div>
    <ToastContainer />
  </Fragment>

);

export default App;

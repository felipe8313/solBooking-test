import React, { Fragment } from 'react';
import './App.scss';
import { DashboardPage } from './pages/dashboard';
import { User } from './model/user';
import { Header } from './common/components/header';

const mockUser: User = {
  id: 1,
  name: 'Felipe Ruiz',
  password: '1234',
  username: 'FelipeRP'
}

const App = () => (
  <Fragment>
    <Header name={mockUser.name}/>
    <div className="container">
      <DashboardPage user={mockUser} />
    </div>
  </Fragment>
  
);

export default App;

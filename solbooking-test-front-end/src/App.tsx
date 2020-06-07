import React from 'react';
import './App.css';
import { DashboardPage } from './pages/dashboard';
import { User } from './model/user';

const mockUser: User = {
  id: 1,
  name: 'Felipe Ruiz',
  password: '1234',
  username: 'FelipeRP'
}

const App = () => (
  <DashboardPage user={mockUser} />
);

export default App;

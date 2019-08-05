import React from 'react';
import { useSelector } from 'react-redux';
import 'firebase/auth';
import { Store } from '@src/store';
import Login from '@containers/Login';
import Topics from '@containers/Topics';
import './App.css';

const App: React.FC = () => {
  const user = useSelector(({ user }: Store) => user);
  return user ? <Login /> : <Topics />;
};

export default App;

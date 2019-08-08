import React from 'react';
import { Provider as Redux } from 'react-redux';
import store from 'Redux/store';
import AuthGateway from 'Containers/AuthGateway';

const App: React.FC = () => (
  <Redux store={store}>
    <AuthGateway />
  </Redux>
);

export default App;

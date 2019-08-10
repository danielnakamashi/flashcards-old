import React, { Suspense } from 'react';
import { Provider as Redux } from 'react-redux';
import store from 'Redux/store';
import AuthGateway from 'Containers/AuthGateway';

const Login = React.lazy(() => import('Components/Login'));
const Topics = React.lazy(() => import('Components/Topics'));

const App: React.FC = () => (
  <Redux store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <AuthGateway authComponent={Topics} anonymousComponent={Login} />
    </Suspense>
  </Redux>
);

export default App;

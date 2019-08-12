import React, { Suspense } from 'react';
import { Provider as Redux } from 'react-redux';
import { Grommet } from 'grommet/components/Grommet';
import { Router } from '@reach/router';
import store from 'Redux/store';
import GlobalStyle from 'Containers/GlobalStyle';
import Spinner from 'Components/Spinner';
import Home from 'Components/Home';
import AuthGateway from 'Containers/AuthGateway';
import Login from 'Components/Login';

const NotFound = React.lazy(() => import('Components/NotFound'));

const App: React.FC = () => (
  <Redux store={store}>
    <Grommet plain full>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Router>
          <Home path="/" />
          <AuthGateway fallback={<Login />} path="/">
            <NotFound default />
          </AuthGateway>
        </Router>
      </Suspense>
    </Grommet>
  </Redux>
);

export default App;

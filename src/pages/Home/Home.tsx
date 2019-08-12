import React from 'react';
import AuthGateway from 'Containers/AuthGateway';
import { RouteComponentProps } from '@reach/router';

const HomeUnauthenticated = React.lazy(() => import('Pages/HomeUnauthenticated'));
const HomeAuthenticated = React.lazy(() => import('Pages/HomeAuthenticated'));
const Home: React.FC<RouteComponentProps> = () => (
  <AuthGateway fallback={<HomeUnauthenticated />}>
    <HomeAuthenticated />
  </AuthGateway>
);

export default Home;

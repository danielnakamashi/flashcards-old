import React from 'react';
import useUser from 'Hooks/useUser';

export interface AuthGatewayProps {
  authComponent: React.ComponentType;
  anonymousComponent: React.ComponentType;
}

const AuthGateway = ({ authComponent: AuthComponent, anonymousComponent: AnonymousComponent }: AuthGatewayProps) => {
  const user = useUser();
  return user ? <AuthComponent /> : <AnonymousComponent />;
};

export default AuthGateway;

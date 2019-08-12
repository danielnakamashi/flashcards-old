import React from 'react';
import useUser from 'Hooks/useUser';
import { RouteComponentProps } from '@reach/router';

export interface AuthGatewayProps extends RouteComponentProps {
  children?: any;
  fallback: React.ReactElement;
}

const AuthGateway = (props: AuthGatewayProps) => {
  const { user } = useUser();
  return user ? props.children : props.fallback;
};

export default AuthGateway;

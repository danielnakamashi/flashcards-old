import React from 'react';
import { Box } from 'grommet/components/Box';
import { Heading } from 'grommet/components/Heading';
import AuthGateway from 'Containers/AuthGateway';
import UserMenu from 'Components/UserMenu';

const Login = React.lazy(() => import('Components/Login'));

const AppBar = () => {
  return (
    <Box
      tag="header"
      direction="row"
      justify="between"
      align="center"
      pad={{ horizontal: 'medium', vertical: 'medium' }}
    >
      <Heading level="2" size="small" margin="none">
        Flashcards
      </Heading>
      <AuthGateway fallback={<Login />}>
        <UserMenu />
      </AuthGateway>
    </Box>
  );
};

export default AppBar;

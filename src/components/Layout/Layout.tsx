import React from 'react';
import { Box } from 'grommet/components/Box';
import AppBar from 'Components/AppBar';

const Layout: React.FC = ({ children }) => (
  <Box fill direction="column">
    <AppBar />
    {children}
  </Box>
);

export default Layout;

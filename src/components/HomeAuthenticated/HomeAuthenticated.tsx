import React from 'react';
import { Box } from 'grommet/components/Box';
import Layout from 'Components/Layout';
import SideMenu from 'Components/SideMenu';
import Topics from 'Components/Topics';

const HomeAuthenticated = () => (
  <Layout>
    <Box direction="row">
      <SideMenu />
      <Box fill>
        <Topics />
      </Box>
    </Box>
  </Layout>
);

export default HomeAuthenticated;

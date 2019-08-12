import React from 'react';
import { Sidebar } from 'grommet-controls/components/Sidebar';
// import { Button } from 'grommet/components/Button';
import { Link } from '@reach/router';

const SideMenu = () => (
  <Sidebar width="small" collapsible={false}>
    <Link to="/test">Topics</Link>
  </Sidebar>
);

export default SideMenu;

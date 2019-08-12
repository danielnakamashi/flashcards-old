import React from 'react';
import { ImageStamp } from 'grommet-controls/components/ImageStamp';
import { DropButton } from 'grommet/components/DropButton';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';
import useUser from 'Hooks/useUser';

export interface DropContentProps {
  signOut: () => void;
}

const DropContent = ({ signOut }: DropContentProps) => {
  return (
    <Box direction="column" align="center">
      <Button onClick={signOut}>Logout</Button>
    </Box>
  );
};

const UserMenu = () => {
  const { user, signOut } = useUser();
  return (
    <DropButton dropContent={<DropContent signOut={signOut} />} dropAlign={{ top: 'bottom' }}>
      <ImageStamp size="medium" round="medium" src={user && user.photoURL} />
    </DropButton>
  );
};

export default UserMenu;

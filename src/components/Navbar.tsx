import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/system';

type NavbarProps = {
  layout: 'horizontal' | 'vertical';
};

const StyledAppBar = styled(AppBar)<{ layout: 'horizontal' | 'vertical' }>(({ layout }) => ({
  flexDirection: layout === 'vertical' ? 'column' : 'row',
  alignItems: layout === 'vertical' ? 'flex-start' : 'center',
}));

const Navbar: React.FC<NavbarProps> = ({ layout }) => {
  return (
    <StyledAppBar position="static" layout={layout}>
      <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;

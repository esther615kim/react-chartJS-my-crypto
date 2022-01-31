import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { StyledToolbar } from './header.styled';
import SideMenu from './SideMenu';

const Header = () => {
  return <div>
      <AppBar position="sticky">
          <StyledToolbar elevation={1}>
              <h5>my-crypto</h5>
              <SideMenu/>
          </StyledToolbar>
          </AppBar>    
  </div>;
};

export default Header;

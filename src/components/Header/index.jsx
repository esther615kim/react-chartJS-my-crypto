import React from 'react';
import { AppBar } from '@mui/material';
import { CryptoState } from '../../context';
import { StyledToolbar,StyledLink } from './header.styled';
import SideMenu from './SideMenu';

const Header = () => {
  // add currency options
  const {currency} = CryptoState();
  
  return <div>
      <AppBar position="sticky">
          <StyledToolbar elevation={1}>
            <StyledLink to="/">
              <h5>my-crypto</h5>
              </StyledLink>
              <SideMenu/>
          </StyledToolbar>
          </AppBar>    
  </div>;
};

export default Header;

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
          <StyledToolbar >
            <StyledLink to="/">
              <h3>Crypto.</h3>
              </StyledLink>
              <SideMenu/>
          </StyledToolbar>
          </AppBar>    
  </div>;
};

export default Header;

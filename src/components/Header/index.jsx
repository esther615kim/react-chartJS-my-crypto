import { AppBar } from '@mui/material';
import React from 'react';
import { CryptoState } from '../../context';
import { StyledToolbar } from './header.styled';
import SideMenu from './SideMenu';

const Header = () => {
  // add currency options
  const {currency, setCurrency} = CryptoState();
  console.log(currency);
  
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

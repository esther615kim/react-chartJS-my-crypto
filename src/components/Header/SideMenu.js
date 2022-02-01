import * as React from "react";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledButton, StyledMenuItem, StyledLink } from './header.styled';

export default function SideMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton sx={{color:"#fff"}}
        startIcon={<MenuIcon />}
        id="menuButton"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></StyledButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menuButton",
        }}
      >
        <StyledLink to="/news">
        <StyledMenuItem onClick={handleClose}>News</StyledMenuItem>
        </StyledLink>
        <StyledMenuItem onClick={handleClose}>Account</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>My list</StyledMenuItem>
      </Menu>
    </>
  );
}

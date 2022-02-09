import { Button, Toolbar,MenuItem } from "@mui/material";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-family: 'Sacramento', cursive;
  text-decoration: none;
  color:#212121;
`
export const StyledToolbar = styled(Toolbar)`
  display: flex;
  padding-left:2rem;
  // background:#42f5aa;
  // background:#15175e;
  // background:#33f0bf;
  background: rgb(233,223,236);
background: linear-gradient(51deg, rgba(233,223,236,1) 1%, rgba(181,241,240,1) 100%);
  justify-content: space-between;
  align-items: center;
  color: #212121;
`;

export const StyledButton = styled(Button)`
color:#212121
`

export const StyledMenuItem = styled(MenuItem)`
text-transform:uppercase;
font-size:0.8rem;
font-weight:500;
:hover{
  font-weight:600;
}

`

// export const StyledLink = styled(Link)`
//   font-family: "Manrope", sans-serif;
//   text-decoration: none;
//   maring-right: 2rem;
//   h4 {
//     color: #212121;
//     text-decoration: none;
//   }
// `;
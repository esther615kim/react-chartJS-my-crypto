import { Button, Toolbar,MenuItem } from "@mui/material";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color:#212121;
`
export const StyledToolbar = styled(Toolbar)`
  display: flex;
  padding-left:2rem;
  background:#42f5aa;
  background:#15175e;
  background:#33f0bf;
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
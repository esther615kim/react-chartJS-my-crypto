import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledUl = styled.ul`
  display: flex;
  color: #212121;
  align-items: center;
  flex-wrap: wrap;
  a{
    text-decoration: none;
    color:#212121;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 18.5rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background-color: ${({ bg }) => bg || "#f2f7fc"};
  div img {
    margin: 0.5rem 1rem;
    width: 2rem;
    height: 2rem;
  }
  h5 {
    width:4.7rem;
    padding-right: 2rem;
  }
  p{
    margin-right: 0.5rem;
    font-size: 0.8rem;
    text-align:right;
  }
:hover{
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2.6px;
    filter: brightness(80%);
    transform: scale(1.02);
}
`;
export const StyledDiv = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;
input{
    border-radius:5px;
    border:1.5px solid #bbb;
    width:10rem;
    height:1rem;
    padding:0.3rem 2rem;
    text-align:center;
}
`;
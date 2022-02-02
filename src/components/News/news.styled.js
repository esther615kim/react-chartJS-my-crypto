// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paper, Box } from "@mui/material";


export const StyledBox = styled(Box)`
  display: flex;
  color: #212121;
  align-items: center;
//   justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 0.5rem;
  h3{
      padding-left:1rem;
  }
`;

export const StyledPaper = styled(Paper)`
margin:0.5rem;
padding:0.5rem;
display:column;
  color: #212121;
  background: ${({ bg }) => bg || "#fff"};
  img{
  }
  div{
      padding-left:0.5rem;
      display:inline-block;
      width:60%;
  }
  h5 {
    padding-left:1rem;
  }
  p {
    text-indent: 1rem;
    text-align: justify;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    height:60px;
    line-height:20px;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

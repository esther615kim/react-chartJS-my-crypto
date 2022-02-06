// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paper, Box } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  color: #212121;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 0.5rem;
  padding-top:1rem;
  h3 {
    padding-left: 1rem;
  }
`;

export const StyledPaper = styled(Box)`
  margin: 0.2rem;
  padding: 0.5rem;
  display: column;
  color: #212121;
  background: ${({ bg }) => bg || "#fff"};
  img {
    border-radius: 0.2rem;
  }
  a{
    text-decoration:none;
    color:#212121;
  }
  div {
    padding:0.2rem 0 0 0.5rem;
    display: inline-block;
    width: 60%;
  }
  h5 {
    margin:0;
    padding:0.5rem 1rem 0 0.5rem;
    height: 40px;
    font-size: 1rem;
    line-height: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    text-indent: 0.5rem;
    font-size: 0.7rem;
    // text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 3.8rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 2.5px;
  }
`;

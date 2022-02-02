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
  h3 {
    padding-left: 1rem;
  }
`;

export const StyledPaper = styled(Box)`
  margin: 0.5rem;
  padding: 0.5rem;
  display: column;
  // border: 1px solid pink;
  color: #212121;
  background: ${({ bg }) => bg || "#fff"};
  img {
    border-radius: 0.2rem;
  }
  div {
    padding:0.2rem 0 0 0.5rem;
    display: inline-block;
    width: 60%;
  }
  h5 {
    margin:0;
    height: 40px;
    font-size: 1rem;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;
  }
  p {
    text-indent: 0.5rem;
    font-size: 0.8rem;
    // text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 60px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 2.5px;
  }
`;

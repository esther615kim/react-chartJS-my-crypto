
// import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  color:#212121;
  flex-direction:row;

  align-items: center;
  flex-wrap:wrap;
  div{
      margin:0.5rem;
      color:#212121;
      text-align:center;
      background: ${({ bg }) => bg || '#eee'};
  }
`;

import styled from "styled-components";
export const StyledUl = styled.ul`

  display: flex;
  color:#212121;
  align-items: center;
  flex-wrap:wrap;
  div{
      display:flex;
      flex-direction:row;
      align-items:center;
      margin:0.5rem;
      background-color: ${({ bg }) => bg || '#eee'};
      div{
          padding-left:0.5rem;
          flex:1
          width:250
      }
      h5{
          padding-right:2rem;}
      p{
          flex:3
          align-self:end;
          margin-right:1rem;
          font-size:0.8rem;
      }
  }
`;
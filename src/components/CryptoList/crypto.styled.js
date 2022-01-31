
import styled from "styled-components";
import { Box } from '@mui/material';
export const StyledUl = styled.ul`

  display: flex;
  color:#212121;
  align-items: center;
  flex-wrap:wrap;
`;

export const StyledBox = styled(Box)`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:18rem;
    margin:0.5rem;
    border-radius:0.2rem;
    background-color: ${({ bg }) => bg || '#eee'};
    div img{
        margin:0.5rem 1rem;
        width:2rem;
        height:2rem;
    }
    h5{
        padding-right:2rem;
    }
    p{
        margin-right:1rem;
        font-size:0.8rem;
    }
`
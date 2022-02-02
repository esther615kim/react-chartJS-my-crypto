
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paper } from "@mui/material";

export const StyledUl = styled.ul`
  display: flex;
  color:#212121;
  flex-direction:row;
  align-items: center;
  flex-wrap:wrap;
  height:14rem;
  overflow:hidden;
`;

export const StyledPaper = styled(Paper)`
margin:0.5rem;
padding-top:0.5rem;
color:#212121;
text-align:center;
background: ${({ bg }) => bg || 'linear-gradient(165deg, rgba(255,255,255,1) 0%, rgba(253,254,253,1) 20%, rgba(241,255,237,1) 94%, rgba(224,255,247,0.9220063025210083) 100%)'};
background:${({bg})=> bg|| 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(253,254,253,1) 44%, rgba(241,255,251,0.9220063025210083) 100%)'};
h5{
  width:8.8rem;
}
:hover{
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transform:scale(1.02);
}
`
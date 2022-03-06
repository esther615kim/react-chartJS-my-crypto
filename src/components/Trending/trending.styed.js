
import styled from "styled-components";
import { Paper,Box } from "@mui/material";

export const StyledUl = styled.ul`
  display: flex;
  color:#212121;
  flex-direction:row;
  align-items: center;
  flex-wrap:wrap;
  height:14rem;
  overflow:hidden;
`;

export const StyledPaper = styled(Box)`
margin:0.5rem;
padding-top:0.5rem;
text-align:center;
background: #FCFCFC; 
border: solid #737173 0.5px; 
box-shadow: 2px 3px 2px rgba(203, 179, 245, 0.5)  ; 
-webkit-box-shadow: 2px 3px 2px rgba(203, 179, 245, 0.5)  ; 
-moz-box-shadow: 2px 3px 2px rgba(203, 179, 245, 0.5)  ; 
background: ${({ bg }) => bg || 'linear-gradient(165deg, rgba(255,255,255,1) 0%, rgba(253,254,253,1) 20%, rgba(241,255,237,1) 94%, rgba(224,255,247,0.9220063025210083) 100%)'};
background:${({bg})=> bg|| 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(253,254,253,1) 44%, rgba(241,255,251,0.9220063025210083) 100%)'};
h5{
  margin-top:1rem;
  width:8.5rem;
}
:hover{
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transform:scale(1.05);
}
`
import styled from "styled-components";

export const StyledApp = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:1rem;

`

export const StyledDiv = styled.div`
background-color:#fff;
width:390 !important; 
height:844 !important; 
border:1px solid #eee;
overflow-y:scroll;

::-webkit-scrollbar {
    display: none;
    }
-ms-overflow-style: none;
box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2.6px;

`
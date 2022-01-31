import React from 'react';
import {Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {StyledBox,StyledDiv,SearchIconWrapper,StyledInputBase} from './search.styled';

const Search = () => {
  return <StyledBox>
          <StyledDiv>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </StyledDiv></StyledBox>;
};

export default Search;

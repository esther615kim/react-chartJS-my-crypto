import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import { FaBtc } from "react-icons/fa";
import { StyledUl } from './hero.styled';

const TRENDING = [
  {
    title: "bitcoin",
    price: 4578.42,
    logo: "FaBtc",
    background:
      "linear-gradient(71deg, rgba(101,95,242,1) 1%, rgba(233,84,250,0.9976365546218487) 100%)",
  },
  {
    title: "bitcoin2",
    price: 4578.42,
    logo: "FaBtc",
    background:
      "linear-gradient(71deg, rgba(242,234,95,1) 1%, rgba(241,157,34,0.9976365546218487) 100%)",
  },
  {
    title: "bitcoin3",
    price: 4578.42,
    logo: "FaBtc",
    background:
      "linear-gradient(71deg, rgba(242,234,95,1) 1%, rgba(34,241,122,0.9976365546218487) 100%)",
  },
  {
    title: "bitcoin4",
    price: 4578.42,
    logo: "FaBtc",
    background:
      "linear-gradient(71deg, rgba(95,139,242,1) 1%, rgba(34,207,241,0.9976365546218487) 100%)",
  },
];

const Hero = () => {
    const [data, setData] = useState(TRENDING);

    useEffect(()=>{
        // fetch data
        // set data
    },[])

  return (
    <Box>
      <StyledUl>
          {data.map(item=>{
              return <Paper bg={item.background} key={item.title} sx={{width:140, height:100}}>
                  <h5>{item.title}</h5>
                  <h6>{item.price}</h6>
              </Paper>
          })}
      </StyledUl>
    </Box>
  );
};

export default Hero;

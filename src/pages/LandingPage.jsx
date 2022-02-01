import React from "react";
import { Grid } from "@mui/material";
import CoinList from "../components/CoinList/index";
import Trending from "../components/Trending/index";

const LandingPage = () => {
  return (
      <Grid container spacing={1}>
        <Grid item>
          <Trending />
        </Grid>
        <Grid item>
          <CoinList />
        </Grid>
      </Grid>
  );
};

export default LandingPage;

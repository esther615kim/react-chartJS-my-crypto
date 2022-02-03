import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { SingleData } from './../config/api';
import { axios } from 'axios';
import { Divider, Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
const SingleCoinPage = () => {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  const {id} = useParams();
  // DRY?
  const fetchData = async () => {
    setLoaded((prev) => !prev);
    const { data } = await axios.get(SingleData(id));
    const updatedData = [...data];
    setItems(updatedData);
    console.log(data);
    setLoaded((prev) => !prev);
  };


  return <Box pl={3}>
                <div>
          <Link to={"/"}>
            <h4>Go back</h4>
            </Link>
        <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="cryptoImage" />
            </div>
    <Grid container>
      <Grid item xs={7} md={7}>
      <h2>{id.toUpperCase()}</h2>
      <h1>$38,809,08</h1>
      </Grid>
      <Grid item xs={3} md={3}>
        <p>24H% 0.73%</p>
        <p>24H Low</p>
        <p>24H High</p>
      </Grid>
      <Grid item xs={11} md={11}>
        <Paper sx={{height:"20rem"}}>
          Chart!!
        </Paper>
      </Grid>
      {/* <Divider variant="middle" /> */}
      <Grid item xs={6} md={6}>
      <h3>MarketCap</h3>
      <h3>$735.35B</h3>
      </Grid>
      <Grid item xs={5} md={5}>
      <h3>24H Volumne</h3>
      <h3>$1.02B</h3>
      </Grid>

      <Grid item xs={11} md={11}>
        <Box pb={3}>
          <h3>Information</h3>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cum nostrum pariatur laudantium praesentium sit cupiditate, fugiat ducimus debitis ratione modi sequi asperiores totam ipsam perspiciatis voluptates dolore. Provident, voluptatem?</p>
            
          </div>
        </Box>
      </Grid>

    </Grid>

  </Box>;
};

export default SingleCoinPage;

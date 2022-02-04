import React, { useState, useEffect, useCallback } from "react";
import { Paper } from "@mui/material";
import axios from "axios";
import { ChartInfo } from "./../../config/api";

const Chart = ({ id }) => {
  const [chart, setChart] = useState();
  const [loading, setLoading] = useState(false);


  const fetchSingleCoin = async () => {
    console.log("coin",id);
    const data  = await axios.get(ChartInfo(id));
    console.log("차트",data);
    // return data;
  };

  fetchSingleCoin()

  // const fetchChart = async () => {
  //   if (!id) throw new Error("crypto id information is not available");
    id && console.log("which coin", id);
  //   setLoading(prev=>!prev); // true

  //   const data = await axios.get(ChartInfo(id));
  //   const newChart = [...data];
  //   setChart(newChart); // immuitable?
  //   setLoading(prev=>!prev); // false
  //   console.log(chart);
  //   return data;
  // };

  // useEffect(() => {
  //   fetchChart();
  // }, [id,chart]); //re-rendering FOREVER

  return (
    <div>
      <Paper sx={{ height: "20rem" }}>{
        !loading && chart?
        (
          <h3>chart!</h3>
        ):(
          <h3>loading...</h3>
        )
      }</Paper>
    </div>
  );
};

export default Chart;

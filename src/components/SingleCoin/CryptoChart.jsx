import React, { useState, useEffect, useCallback } from "react";
import { CircularProgress, Box,Paper } from "@mui/material";
import axios from "axios";
import { ChartInfo } from "../../config/api";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const CryptoChart = ({ id }) => {
  const [cryptoPriceInfo, setCryptoPriceInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [dateHistory,setdateHistory] = useState([]);
  const [priceHistory,setPriceHistory]=useState([]);
  const chartData = {};
  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  const fetchSingleCoin = async () => {
    //! too many re-rendering
    const { data } = await axios.get(ChartInfo(id, 180));
    return data;
  };

  useEffect(() => {
    setLoading(prev=> !prev) //true
    fetchSingleCoin()
      .then((res) => {
        res && setCryptoPriceInfo(res.prices);
      })
      .then(() => {
        console.log("updated",cryptoPriceInfo)
        // formatChartData();
        chartData.length = 0;
      })
      .then(() => {
        chartData.labels = dateHistory;
        chartData.datasets = [
          {
            label: "Price in USD",
            data: priceHistory,
            fill: false,
            backgroundColor: "pink",
            borderColor: "blue",
          },
        ];
      })
      .then(()=>{
        console.log("날짜길이",chartData)
        setLoading(prev=> !prev) //false
      });
  }, [dateHistory,chartData]);

  const formatChartData = () => {
    if (!cryptoPriceInfo) return;
    // clear arrays(is this okay? any better way)

    cryptoPriceInfo.forEach((item) => {
      //date
      const newDateHistory = [];
      newDateHistory.push(new Date(item[0]).toISOString().split("T")[0]); 
      setdateHistory(newDateHistory);
      // price
      const newPriceHistory= [];
      newPriceHistory.push(item[1].toFixed(2)); 
      setPriceHistory(newPriceHistory);
    });
  };

  return (
      <Paper >
      <div style={{ width: "100%", height: "16rem" }}>

        {!loading && chartData.length? (
          <>
          <Chart type='line' data={chartData} />
          </>
        ) : (
          <Box sx={{width:"90%",height:"90%",display:"flex",justifyContent:"center", alignItems:"center"}}>
          <CircularProgress color="primary" />
          </Box>
        )}

       </div>
      </Paper>
  );
};

export default CryptoChart;

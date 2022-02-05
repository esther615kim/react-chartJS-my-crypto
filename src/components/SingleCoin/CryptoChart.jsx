import React, { useState, useEffect, useCallback } from "react";
import { CircularProgress, Box,Paper } from "@mui/material";
import axios from "axios";
import { ChartInfo } from "../../config/api";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const CryptoChart = ({ id }) => {
  const [cryptoPriceInfo, setCryptoPriceInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [dateHistory,setdateHistory] = useState([]);
  const [priceHistory,setPriceHistory]=useState([]);
  const chartData = {};
  // const options = {
  //   elements: {
  //     point: {
  //       radius: 1,
  //     },
  //   },
  // };

  const fetchSingleCoin = async () => {
    //! too many re-rendering
    const { data } = await axios.get(ChartInfo(id, 180));
    return data;
  };
  const options = {
    // responsive: true,
    plugins: {
      legend: {
        position: "top" 
      },
      title: {
        display: true,
        text: "Price History"
      }
    }
  };
  const labels = [
    "September",
    "October",
    "November",
    "December",
    "January",
    "February"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: id,
        data: [1.30,1.25,1.45,1.20,1.02,1.13],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };

  // useEffect(() => {
  //   setLoading(prev=> !prev) //true
  //   fetchSingleCoin()
  //     .then((res) => {
  //       res && setCryptoPriceInfo(res.prices);
  //     })
  //     .then(() => {
  //       console.log("updated",cryptoPriceInfo)
  //       // formatChartData();
  //       chartData.length = 0;
  //     })
  //     .then(() => {
  //       chartData.labels = dateHistory;
  //       chartData.datasets = [
  //         {
  //           label: "Price in USD",
  //           data: priceHistory,
  //           fill: false,
  //           backgroundColor: "pink",
  //           borderColor: "blue",
  //         },
  //       ];
  //     })
  //     .then(()=>{
  //       console.log("날짜길이",chartData)
  //       setLoading(prev=> !prev) //false
  //     });
  // }, [dateHistory,chartData]);

  // const formatChartData = () => {
  //   if (!cryptoPriceInfo) return;
  //   // clear arrays(is this okay? any better way)

  //   cryptoPriceInfo.forEach((item) => {
  //     //date
  //     const newDateHistory = [];
  //     newDateHistory.push(new Date(item[0]).toISOString().split("T")[0]); 
  //     setdateHistory(newDateHistory);
  //     // price
  //     const newPriceHistory= [];
  //     newPriceHistory.push(item[1].toFixed(2)); 
  //     setPriceHistory(newPriceHistory);
  //   });
  // };

  return (
      <Paper >
        {/* {!loading && chartData.length? 
        ( */}
          
          <>
          {/* <Chart type='line' 
          data={
            labels=["Friday","Saturday","Sunday"],
            dataset=[
              {
                label:"data1",
                data:[3,3,10],
                borderColor:"#eee",
                backgroundColor:"#aaa"
              }
            ]
          } 
          />  */}
 <Line options={options} data={data} />
          </>
         {/* ) : (
           <Box sx={{width:"90%",height:"90%",display:"flex",justifyContent:"center", alignItems:"center"}}>
          <CircularProgress color="primary" />
           </Box>
         )} */}
      </Paper>
  );
};

export default CryptoChart;

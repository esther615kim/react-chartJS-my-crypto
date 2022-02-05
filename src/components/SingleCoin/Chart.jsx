import React, { useState, useEffect, useCallback } from "react";
import { CircularProgress, Paper } from "@mui/material";
import axios from "axios";
import { ChartInfo } from "./../../config/api";
import { Line } from 'react-chartjs-2';

import {CHARTINFO} from './chartInfo';

const Chart = ({ id }) => {
  const [cryptoPriceInfo, setCryptoPriceInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(1);
  const dateHistory = [];
  const priceHistory = [];
  const chartData = {
    // labels:dateHistory,
    // datasets:[
    //   {
    //     label:"Price in USD",
    //     data:priceHistory,
    //     fill:false,
    //     backgroundColor:"pink",
    //     borderColor:"blue"
    //   }
    // ]
  }

  const options = {
      elements: {
        point: {
          radius: 1,
        },
      }
  }

  const fetchSingleCoin = async () => { //! too many re-rendering
    const {data}  = await axios.get(ChartInfo(id,365));
    return data;
  };


  useEffect(() => {
    fetchSingleCoin()
    .then((res)=> {
      setCryptoPriceInfo(res.prices);
      // console.log(cryptoPriceInfo[0][0]);
    })
    .then(()=>{
      formatChartData();      
    })
    .then(()=>{
      chartData.length = 0;
      if(dateHistory.length){
        chartData.labels = dateHistory;
        chartData.datasets = [
          {
            label:"Price in USD",
            data:priceHistory,
            fill:false,
            backgroundColor:"pink",
            borderColor:"blue"
          }
        ]
      }

      console.log(chartData);
      })
  }, []); //re-rendering FOREVER


const formatChartData = ()=>{
   if(!cryptoPriceInfo) return; 
   // clear arrays(is this okay? any better way)
   dateHistory.length =0;
   priceHistory.length=0;

  cryptoPriceInfo.forEach(item=>{
     dateHistory.push(new Date(item[0]).toISOString().split('T')[0]); // date;
     priceHistory.push(item[1].toFixed(2));// price
   })
}

  return (
    <div>
      <Paper sx={{ height: "rem" }}>{
        !loading && cryptoPriceInfo?
        (
          <>
          
          <div style={{width:"100%",height:"16rem"}}>
          
          {/* chart */}
          <h3>hello</h3>
          {/* <Line 
          data={chartData}
          options={chartOptions}
          /> */}
          
          {/* <Line 
              data={{
                labels: cryptoPriceInfo.map((chartInfo) => {
                  let date = new Date(chartInfo[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: cryptoPriceInfo.map((chartInfo) => chartInfo[1]), //  [1]은 price
                    label: `Price ( Past ${days} Days ) in $`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            /> */}
          </div>
{/* <Line
  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }}
/> */}
          </>
        ):(
          <h3>loading...</h3>
          // <CircularProgress color="primary" />
        )
      }</Paper>
    </div>
  );
};

export default Chart;

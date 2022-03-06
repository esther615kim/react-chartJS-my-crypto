import React, { useState, useEffect, useCallback } from "react";
import { LinearProgress, Paper } from "@mui/material";
import axios from "axios";
import { ChartInfo } from "../../config/api";
import "chart.js/auto";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { DataArray } from "@mui/icons-material";

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
  const [labels, setDateHistory] = useState([]);
  const [priceHistory, setPriceHistory] = useState([]);

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Price History",
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: id,
        data: priceHistory,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // useCallback?
  const fetchSingleCoin = async () => {
    const { data } = await axios.get(ChartInfo(id, 365));
    return data;
  }; 

  useEffect(() => {
    setTimeout(() => {
      fetchSingleCoin()
        .then((res) => {
          setCryptoPriceInfo(res.prices);
        })
        .then(() => {
          formatChartData();
        });
    }, 500);
  }, []); //data

  const formatChartData = () => {
    if (!cryptoPriceInfo) return;

    const newChartData = {
      dates: [],
      prices: [],
    };

    cryptoPriceInfo.forEach((item) => {
      newChartData.dates.push(new Date(item[0]).toISOString().split("T")[0]);
      newChartData.prices.push(item[1].toFixed(2));
    });
    seedData(newChartData);
  };

  const seedData = (_data) => {
    setDateHistory(_data.dates);
    setPriceHistory(_data.prices);
  };


  console.log(labels.length);

  return (
    <Paper>
      <>
        {labels.length? (
          <Line options={options} data={data} />
        ) : (
          <div>
            <LinearProgress color="inherit" />
          </div>
        )}
      </>
    </Paper>
  );
};

export default React.memo(CryptoChart);

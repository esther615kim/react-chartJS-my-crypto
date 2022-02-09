import React, { useEffect, useState } from "react";
import { Box,LinearProgress } from "@mui/material";

import { StyledUl, StyledPaper } from "./trending.styed";
import axios from "axios";
import { Link } from "react-router-dom";

const Trending = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading((prev) => !prev);
    const customAxios = axios.create({});
    const { data } = await customAxios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    // const updatedData = [...data] // how to fix "data is not iterable"
    setItems(data.coins); // not immutable :(
    setLoading((prev) => !prev);
  };

  // console.log(items);
  useEffect(() => {
    fetchData();
    // }, [items]);
  }, []);

  return (
    <Box>
      <StyledUl>
        {items ? (
          items.map((coin) => (
            <StyledPaper key={coin.item.id}>
              <Link to={`/crypto/${coin.item.id}`}>
                <div>
                  <img
                    src={coin.item.thumb}
                    style={{ width: 25, height: 25 }}
                    alt="symbol"
                  />
                </div>
              </Link>
              <h5>{coin.item.id}</h5>
            </StyledPaper>
          ))
        ) : (
          <div>
          <LinearProgress color="inherit" />
        </div>
        )}
      </StyledUl>
    </Box>
  );
};

export default React.memo(Trending);

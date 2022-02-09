import React, { useCallback, useEffect, useState } from "react";
import { Box,Pagination } from "@mui/material";
import { StyledUl, StyledBox, StyledDiv } from "./crypto.styled";
import axios from "axios";
import { SingleData,CryptoList } from "../../config/api";
import { CryptoState } from "../../context";
import { Link } from 'react-router-dom';

const CoinList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency } = CryptoState();

  // DRY?
  const fetchData = async () => {
    setLoading((prev) => !prev);
    const { data } = await axios.get(CryptoList(currency));
    const updatedData = [...data];
    setItems(updatedData);
    setLoading((prev) => !prev);
  };

  const fetchSingleCoin = async (id) => {
    const { data } = await axios.get(SingleData(id));
    console.log("single data",data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StyledDiv>
        <input
          placeholder="search..."
          type="text"
          onChange={(event) => {
            event.target.value && setSearch(event.target.value);
          }}
        />
      </StyledDiv>
      <StyledUl>
        {items
          .slice((page - 1) * 10, (page - 1) * 10 + 10) // 10 per page

          .filter(function(coin){
            if(search === "") return coin;
            else if (coin.id.toLowerCase().includes(search.toLowerCase())) return coin;
          })
          .map((item) => {
            return (

              <StyledBox key={item.id}>
                <div>
                  <img src={item.image} alt="symbol" />
                </div>
                <Link to={`/crypto/${item.id}`} 
                >
                <h5>{item.id}</h5>
                </Link>
                <p style={{ width: "4rem" }}>
                  $ {item.current_price.toFixed(2)}
                </p>

                <p>{item.price_change_percentage_24h.toFixed(1)}%</p>
              </StyledBox>

            );
          })
        }
      </StyledUl>
      <Pagination
      sx={{display:"flex",justifyContent:"center",pb:5}}
      count={5} page={page}
      onChange={(_,value)=>{
        setPage(value);
        window.scroll(0,150);
      }}
      />
    </>
  );
};

export default React.memo(CoinList);

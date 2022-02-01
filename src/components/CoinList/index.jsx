import React, { useCallback, useEffect, useState } from "react";
import { Box} from "@mui/material";
import { FaBtc } from "react-icons/fa";
import { StyledUl, StyledBox,StyledDiv } from "./crypto.styled";
import axios from "axios";
import { CryptoList } from "../../config/api";
import { CryptoState } from "../../context";

const CoinList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const { currency } = CryptoState();

  // DRY?
  const fetchData = async () => {
    setLoading((prev) => !prev);
    const { data } = await axios.get(CryptoList(currency));
    const updatedData = [...data];
    setItems(updatedData);
    setLoading((prev) => !prev);
  };
  
  console.log(items);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <StyledDiv>
      <input
      placeholder='search...'
        type="text"
        onChange={(event) => {
          event.target.value && setSearch(event.target.value);
        }}
      />
      </StyledDiv>
        <StyledUl>
          {items
            // eslint-disable-next-line array-callback-return
            // .filter((coin) => {
            //   if(search === "") return coin;
            //   else if (coin.id.toLowerCase().includes(search.toLowerCase()))
            //     return coin;
            // })
            .map((item) => {
              let trend = item.price_change_percentage_24?.toFixed(1);

              return (
                <StyledBox key={item.id}>
                  <div>
                    <img src={item.image} alt="symbol" />
                  </div>
                  <h5>{item.id}</h5>
                  <p style={{width:"4rem"}} >$ {item.current_price.toFixed(2)} 
                  </p>
                  <p>
                    {item.price_change_percentage_24h.toFixed(1)}
                    %
                  </p>
                </StyledBox>
              );
            })}
        </StyledUl>
    </>
  );
};

export default React.memo(CoinList);

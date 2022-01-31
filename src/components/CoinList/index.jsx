import React, { useCallback, useEffect, useState } from "react";
import { Box} from "@mui/material";
import { FaBtc } from "react-icons/fa";
import { StyledUl, StyledBox,StyledDiv } from "./crypto.styled";
import axios from "axios";
import { CryptoList } from "../../config/api";
import { CryptoState } from "../../context";
// import Search from "./../Search/index";

const CoinList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const { currency } = CryptoState();

  // DRY
  const fetchData = async () => {
    setLoading((prev) => !prev);
    const { data } = await axios.get(CryptoList(currency));
    const updatedData = [...data];
    setItems(updatedData);
    setLoading((prev) => !prev);
  };

  useEffect(() => {
    // fetch data
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
      {/* <Box> */}
        <StyledUl>
          {items
            // eslint-disable-next-line array-callback-return
            .filter((coin) => {
              if(search === "") return coin;
              else if (coin.id.toLowerCase().includes(search.toLowerCase()))
                return coin;
            })
            .map((item) => {
              return (
                <StyledBox key={item.id}>
                  <div>
                    <img src={item.image} alt="symbol" />
                  </div>

                  <h5>{item.id}</h5>
                  <p>$ {item.current_price}</p>
                </StyledBox>
              );
            })}
        </StyledUl>
      {/* </Box> */}
    </>
  );
};

export default React.memo(CoinList);

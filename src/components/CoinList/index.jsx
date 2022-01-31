import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { FaBtc } from "react-icons/fa";
import { StyledUl, StyledBox } from "./crypto.styled";
import axios from "axios";
import { CryptoList } from "../../config/api";
import { CryptoState } from "../../context";
import Search from "./../Search/index";

const CoinList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  const { currency } = CryptoState();

// DRY
  const fetchData = async () => {
    setLoading((prev) => !prev); // true
    const { data } = await axios.get(CryptoList(currency));
    const updatedData = [...data];
    setItems(updatedData);
    setLoading((prev) => !prev); // false
  };

  const handleSearch = useCallback(() => {
    return items.filter((item) => item.id.toLowerCase().includes(search));
  },[items,search]);

  useEffect(() => {
    // fetch data
    fetchData();
  }, []);

  return (
    <>
      <Search onChange={(e) =>  setSearch(e.targe.value)} />
      <Box>
        <StyledUl>
          {
          search ? (
            // 1.logic for showing data from handleSearch func result
            <h5>Looking ...</h5>
          ) : (
            // 2.otherwise show everything
            items.map((item) => {
              return (
                <StyledBox key={item.id}>
                  <div>
                    <img src={item.image} alt="symbol" />
                  </div>

                  <h5>{item.id}</h5>
                  <p>$ {item.current_price}</p>
                </StyledBox>
              );
            })
          )}
        </StyledUl>
      </Box>
    </>
  );
};

export default React.memo(CoinList);

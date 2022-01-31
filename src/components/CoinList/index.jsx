import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { FaBtc } from "react-icons/fa";
import { StyledUl } from "./crypto.styled";
import axios from "axios";
import { CryptoList } from "../../config/api";
import { CryptoState } from "../../context";
import Search from "./../Search/index";

const CoinList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search,setSearch] = useState();

  const { currency } = CryptoState();

  const fetchData = async () => {
    setLoading((prev) => !prev); // true
    const { data } = await axios.get(CryptoList(currency));
    const updatedData = [...data];
    setItems(updatedData);
    setLoading((prev) => !prev); // false
  };

  const handleSearch = () =>{
    return items.filter((item)=>item.id.toLowerCase().includes(search))
  }

  useEffect(() => {
    // fetch data
    fetchData();
    console.log('searchTerm',search);
  }, [currency]);

  return (
    <>
      <Search onChange={(e)=>setSearch(e.targe.value)} />
      <Box>
        <StyledUl>
          {search ?
          <h5>Looking ...</h5>
          // logic
          :
          items.map((item) => {
            return (
              <Box key={item.id} sx={{ width: 300, height: 50 }}>
                <div>
                  <img
                    style={{ width: 30, height: 30 }}
                    src={item.image}
                    alt="symbol"
                  />
                </div>

                <h5>{item.id}</h5>

                <p>$ {item.current_price}</p>
              </Box>
            );
          })
          }

        </StyledUl>
      </Box>
    </>
  );
};

export default CoinList;

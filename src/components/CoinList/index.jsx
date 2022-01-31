import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { FaBtc } from "react-icons/fa";
import { StyledUl } from "./crypto.styled";
import axios from "axios";
import { CryptoList } from '../../config/api';
import { CryptoState } from '../../context';

const CoinList = () => {
  const [items, setItems] = useState([]);
  const [loading,setLoading]=useState(false);

  const {currency} = CryptoState();

  const fetchData =async()=>{
      setLoading(prev=>!prev); // true
      const {data} = await axios.get(CryptoList(currency));
      const updatedData = [...data];
      setItems(updatedData);
      setLoading(prev=>!prev); // false
  }

  console.log(items);

  useEffect(() => {
    // fetch data
    fetchData();
    // set data
  }, [currency]);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <StyledUl>
          {/* {data.map((item) => {
            return (
              <Box key={item.title} sx={{ width: 300, height: 50 }}>
                <div>
                  <FaBtc />
                </div>

                <h5>{item.title}</h5>

                <p>{item.price}</p>
              </Box>
            );
          })} */}
        </StyledUl>
      </Box>
    </>
  );
};

export default CoinList;

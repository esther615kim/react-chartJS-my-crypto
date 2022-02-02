import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { StyledUl, StyledPaper, StyledBox } from "./news.styled";

import {useGetNewsQuery } from '../../store/fetchNewsApi';
import CategoryTabs from './Tabs';

const News = () => {
  const [news, setNews] = useState([]);
  const {data} = useGetNewsQuery({category:'Cryptocurrency', count:10});

  useEffect(() => {
    setNews(data);
  }, [data]);


  return (
    <StyledBox>
<CategoryTabs/>


      {
      news.value?(
      news.value.map(item=>(
              <StyledPaper>
               <img
                src={item.image?.thumbnail?.contentUrl ||"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"}
                style={{ width: 120, height: 120 }}
                alt="symbol"
              /> 
              <div>
            <h5>{item.name}</h5>
            <p>{item.description}
            </p>
            </div> 
          </StyledPaper>
      ))
      ):(
        <div>
        <h3>loading...</h3>
        </div>
      )
    }
    </StyledBox>
  );
};

export default React.memo(News);

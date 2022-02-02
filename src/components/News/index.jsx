import React, { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";
import { StyledUl, StyledPaper, StyledBox } from "./news.styled";

import { useGetNewsQuery } from "../../store/fetchNewsApi";
import CategoryTabs from "./Tabs";

const News = () => {
  // Error here!!
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const { data } = useGetNewsQuery({ category: "Cryptocurrency", count: 10 });
  const [loaded, setLoaded] = useState(false);
  // const {error, isLoading } = useGetNewsQuery();

  useEffect(() => {
    const fetchNews = async()=> {
      const res = await setItems(data);
      return res;
    }
    fetchNews();
     items.length && console.log("items", items);
  }, [items])

  return (
    <>
    <StyledBox>
      <CategoryTabs />
          {
            loaded && items? 
            (items.slice((page - 1) * 10, (page - 1) * 10 + 10) // 10 per page
          .map((item) => (
            <StyledPaper key={item.name}>
              <img
                src={
                  item.image?.thumbnail?.contentUrl ||
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
                }
                style={{ width: 120, height: 120 }}
                alt="symbol"
              />
              <div>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </StyledPaper>
          ))
            ):(
              <h4>loading...</h4>
            )
        }
    
    </StyledBox>
    <Pagination
      sx={{display:"flex",justifyContent:"center",pb:5}}
      count={3} page={page}
      onChange={(_,value)=>{
        setPage(value);
        window.scroll(0,150);
      }}
      />
    </>
  );
};

export default React.memo(News);
import React, { useEffect, useState } from "react";
import { Box, Pagination, LinearProgress } from "@mui/material";
import { StyledUl, StyledPaper, StyledBox } from "./news.styled";
import { useGetNewsQuery } from "../../store/fetchNewsApi";
import CategoryTabs from "./Tabs";
import { Link } from "react-router-dom";
import { keys } from '@mui/system';

const News = () => {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState();
  const data = useGetNewsQuery(); //data.data

  useEffect(() => {
    setTimeout(() => {
      console.log(data.status);
      // if (data.status === "fulfilled" && data.data.value.length) {
        if(data.status ==="fulfilled"){
        setNews(data.data.value);
      }
    }, 1500);
  }, [news,data]);
  return (
    <>
      <StyledBox>
        {news ? (
          news
            .slice((page - 1) * 10, (page - 1) * 10 + 10) // 10 per page
            .map((item,key) => (
              <StyledPaper key={key}>
                <img
                  src={
                    item.image?.thumbnail?.contentUrl ||
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
                  }
                  style={{ width: 120, height: 120 }}
                  alt="symbol"
                />
                <Link to={`/news/${key}`}  state={{ from:item }} >
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </StyledPaper>
            ))
        ) : (
          <div>
            <LinearProgress color="inherit" />
          </div>
        )}
      </StyledBox>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", pb: 5 }}
        count={3}
        page={page}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 150);
        }}
      />
    </>
  );
};

export default News;

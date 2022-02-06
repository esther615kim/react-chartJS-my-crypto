import React, { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";
import { StyledUl, StyledPaper, StyledBox } from "./news.styled";
import axios from "axios"; 
import CategoryTabs from "./Tabs";
import { newsData, newsHeaders } from "../../config/api";
import { Link } from "react-router-dom";
import { useGetNewsQuery } from '../../store/fetchNewsApi';

const News = () => {
  // Error here!!
  // const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Cryptocurrency');
  const [page, setPage] = useState(1);

  const {data: fetchedNews, isFetching} = useGetNewsQuery({
    newsCategory: selectedCategory,
    count:20
  });

  if (isFetching || !fetchedNews?.value) return <h3>Loading...</h3>


  // const fetchNews = async () => { 

  //   const { data } = await axios.get(newsData(newsHeaders)).catch(function (error) {
  //       console.error(error);
  //   });
    // const {data}  = await newsData({ category: "Cryptocurrency", count: 10 });
  //   console.log(data);
  //   return data;
  // };

  // useEffect(() => {
  //   fetchNews().then((res)=>{
  //     console.log(res);
  //   })

  // }, []);

  return (
    <>
      <StyledBox>
        <CategoryTabs />
        { fetchedNews ? (
          fetchedNews.value
            .slice((page - 1) * 10, (page - 1) * 10 + 10) // 10 per page
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
                <Link to={`/news/${item.id}`}> 
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </StyledPaper>
            ))
        ) : (
          <h4>loading...</h4>
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

export default React.memo(News);

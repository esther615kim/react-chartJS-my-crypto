import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// // header from bing news
const newsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "61b57e07f9msh6b7f9da8828a83cp150d5ajsnece4b0d09e4c",
};

// const fetchData = (url) => ({ url, headers: newsHeaders });

// // Define a service using a base URL and expected endpoints
// export const newsApi = createApi({
//   reducerPath: 'newsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com/news' }),
//   endpoints: (builder) => ({
//     getNews: builder.query({
//       // query:()=>"trendingtopics",
//       query: ({category, count}) => fetchData(`/search?q=${category}&safeSearch=Off&textFormat=Raw&count=${count}`),
//     }),
//   }),
// })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

// baseUrl: process.env.REACT_APP_NEWS_API_URL

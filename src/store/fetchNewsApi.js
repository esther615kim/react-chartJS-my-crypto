import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // header from bing news
const apiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "7a5497282fmsh987c4fff5ff5d47p1e8276jsn5c261faff3ac",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const requestData = (url) => ({ url, headers: apiHeaders });

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ category = "", count = 10 }) =>
        requestData(
          `/search?q=${category}&safeSearch=Off&textFormat=Raw&count=${count}`
        ),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsQuery } = newsApi;

// baseUrl: process.env.REACT_APP_NEWS_API_URL

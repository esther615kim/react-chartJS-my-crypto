import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // header from bing news
const apiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "7a5497282fmsh987c4fff5ff5d47p1e8276jsn5c261faff3ac",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const requestData = (url) => ({ url, headers: apiHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        requestData(
          "https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=off&textFormat=Raw&freshness=Day&count=20"
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

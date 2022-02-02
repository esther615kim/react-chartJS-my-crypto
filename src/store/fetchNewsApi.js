import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// header from bing news
const newHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '61b57e07f9msh6b7f9da8828a83cp150d5ajsnece4b0d09e4c'
  }
const createRequest = (url) =>({url, headers:newHeaders});

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com/news' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({category, count}) => createRequest(`/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsQuery } = newsApi;
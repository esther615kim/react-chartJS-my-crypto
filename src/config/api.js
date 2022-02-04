import axios from "axios";

export const CryptoList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

export const TrendingData = () => `https://api.coingecko.com/api/v3/search/trending?per_page=4`;

export const SingleData = (id) => `https://api.coingecko.com/api/v3/coins/${id}`;


export const ChartInfo = (id,period = 365) => `
https://api.coingecko.com/api/v3/${id}/market_chart?vs_currency=usd&days=${period}`;
// trending

const newsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "61b57e07f9msh6b7f9da8828a83cp150d5ajsnece4b0d09e4c",
};

export async function newsData(cryptoInfo) {
  const { category, count } = cryptoInfo;
  const response = await fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=${category}&safeSearch=Off&textFormat=Raw&count=${count}`,
    {
      headers: newsHeaders,
    }
  );
  const data = await response.json();
  return data.value;
}

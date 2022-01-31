export const CryptoList =(currency)=>
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

export const TrendingData =()=> `https://api.coingecko.com/api/v3/search/trending?per_page=4`;

export const SingleData = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const ChartInfo =(id, days=365, currency) =>`
https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

// trending



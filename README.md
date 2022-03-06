<h1 align="center"> My-Crypto</h1><p align="center">
<div align="center">
  <p align="center"><a href="https://github.com/esther615kim/react-chartJS-my-crypto">Netlify-deployed App (to-be-updated)</a></p>
</div>

## Project

  A moble-first `React` application that can search and display cryptocurrency updates and the market news. To help visualise the data, I used `Chart.js`. `CoinGeocko` and `Bing News Search` were used as third-party APIs for the Chart component and the News page. For data fetching, I tried using both `RTK Query` and `Axios` for me to compare the functionalities and differences.

<img src="https://user-images.githubusercontent.com/75744588/156934284-d15af0f0-1f56-43c9-b661-d7bb2060b5a6.png" width="550"> 

### Technologies
- React 
- Chart.js
- RTK Query
- MUI

###  How to Run
  
- To run the app, clone the repo and run it with `npm install` in the terminal.
- Run the app with `npm run start`.
- minimum versions of `Node.js` to run the project: Node.js `v17.1.0` 

  
### Lessons learned and what I've praticed  
  
- `RKT Query` 
- I have used a simple version of RTK Query custom hook in the `Butler` project. This time, it was a bit tricky since `headers` should be included in the API request call as a second argument. I seperated `headers` and `baseUrl` from the newsApi function to make it more readable and easier to amend in the future. I'd like to pratice adding customised middleware next time.

- `Chart.js`
- I chose `Chart.js` over other options because I got just 2 days for the data visualisation project sprint. The docs look easy to follow and it seemed simple to add a chart in the App. However, it turned out that sorting and modifying the source data took me some `good` time. It was a good pratice to sort and filter the raw data and make it work in the `data obj` for the chart.   

- Custom hook `useFetchData`
- Throughout the project phase, I was repeatedly using the same code block for calling APIs. To apply the `DRY` princicle, I searched for a better practice. I found that making a custom hook to fetch APIs could be a good solution and created `useFetchData.js`.
  
### Ideas for Improvement
  
- [ ]  Try `React Query` for data fetching
- [ ]  Performance check

### References I've checked
- mui pagination https://mui.com/components/pagination/
- CSS scan box-shadow samples https://getcssscan.com/css-box-shadow-examples
- redux rtk https://redux-toolkit.js.org/rtk-query/overview 
- CoinGecko API https://www.coingecko.com/en/api
- react-chart-js2 github https://github.com/reactchartjs/react-chartjs-2#docs

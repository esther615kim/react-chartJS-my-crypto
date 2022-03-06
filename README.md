## Project

  A moble-first `React` application to search and display price updates and the market news. To help visualise the data, I used `Chart.js`. `CoinGeocko` and `Bing News Search` were used as third-party APIs for the Chart component and the News page. For data fetching, I tried using both `RTK Query` and `Axios` for me to compare the functionalities and differences.

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
 It was tricky since `headers` information should be included in the API request call as a second argument. I seperated `headers` and `baseUrl` from the newsApi function to make it more readable and easier to amend in the future.  I'd like to try using RTK Query a few more times to use it better.

- `Chart.js`
 I chose `Chart.js` over other options mainly because:1.`time limit`: I mainly got 2 days for the data visualisation project 2.The docs look easy to follow and it seemed easy to add a simple chart in the App. However, sorting and amending the data source took me some good time to be finally displayed in the chart!  

- custom hook `useFetchData`
 throughout the project phase, I repeatedly used a code block  for calling APIs using `Axios` and searched for a better practice to avoid "DRY". I found that making a custom hook to fetch APIs could be a good solution and created `useFetchData.js`.
  
### Ideas for Improvement
  
- [ ]  Try `React Query` for data fetching
- [ ]  Performance check

### References I've checked
- mui pagination https://mui.com/components/pagination/
- CSS scan box-shadow samples https://getcssscan.com/css-box-shadow-examples
- redux rtk https://redux-toolkit.js.org/rtk-query/overview 
- CoinGecko API https://www.coingecko.com/en/api
- react-chart-js2 github https://github.com/reactchartjs/react-chartjs-2#docs

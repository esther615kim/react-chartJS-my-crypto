import { Grid } from '@mui/material';
import Header from './components/Header';
// import Search from './components/Search';
import CoinList from './components/CoinList/index';
import Trending from './components/Trending/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid container spacing={1}>
        <Grid item>
        <Trending/>
        </Grid>
        <Grid item>
          <CoinList/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

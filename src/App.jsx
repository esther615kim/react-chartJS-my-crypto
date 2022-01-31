import { Grid } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero/index';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid container spacing={2}>
        <Grid item>
          <Search/>
        </Grid>
        <Grid item>
        <Hero/>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default App;

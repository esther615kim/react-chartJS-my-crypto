import { Grid } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid container spacing={2}>
        <Grid item>
          <Hero/>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default App;

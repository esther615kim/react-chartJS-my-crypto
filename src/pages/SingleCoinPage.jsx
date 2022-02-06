import millify from "millify";
import { Link, useParams } from "react-router-dom";
import { SingleData } from "./../config/api";
import { Grid, Box,Divider } from "@mui/material";

import CryptoChart from './../components/SingleCoin/CryptoChart';
import useFectchDatabyUrl from './../hooks/useFetchData';

const SingleCoinPage = () => {
  // const [crypto, setCrypto] = useState();
  const { id } = useParams();
  const {data,isLoading,error} = useFectchDatabyUrl(SingleData(id));

  if(error) return <h3>error</h3>
  if(isLoading || !data) return <h3>Loading...</h3>;
  console.log("custom-hook",data.id);

  return (
    <Box pl={3}>
      <div>
        <Link style={{ textDecoration: "none", color: "#aaa" }} to={"/"}>
          <h4>Go back</h4>
        </Link>
      </div>

      <Grid container>
        <>
            <Grid item xs={11} md={11}>
              <img
                src={data.image.small}
                alt="cryptoImage"
                style={{ margin: "1rem" }}
              />
            </Grid>
            <Grid item xs={7} md={7}>
              <h2>{id.toUpperCase()}</h2>
              <h1>$ {data.market_data.current_price.usd.toLocaleString()}</h1>
            </Grid>
            <Grid item xs={6} md={6}>
              <h5>Market rank:{data.market_cap_rank}</h5>
              <p>Market cap {millify(data.market_data.market_cap.usd)}</p>
              <p>Total volume{millify(data.market_data.total_volume.usd)}</p>
            </Grid>
            <Grid item xs={5} md={5}>
              <h5>24H:{data.market_data.price_change_percentage_24h.toFixed(2)}%</h5>
              <p>24H High {data.market_data.high_24h.usd.toLocaleString()}</p>
              <p>24H Low {data.market_data.low_24h.usd.toLocaleString()}</p>
            </Grid>
            <Grid item xs={11} md={11}>
              <CryptoChart id={crypto.id} />
            </Grid>
            <Divider variant="middle" />
            <Grid item xs={6} md={6}>
              <h3>Market Cap</h3>
              <h3>$ {millify(data.market_data.market_cap.usd)}</h3>
            </Grid>
            <Grid item xs={5} md={5}>
              <h3>24H Volumne</h3>
              <h3>$1.02B</h3>
            </Grid>
            <Grid item xs={11} md={11}>
              <Box pb={3}>
                <h3>Information</h3>
                <div>
                  <p>{data.description.en}</p>
                </div>
              </Box>
            </Grid>
          </>
      </Grid>
    </Box>
  );
};

export default SingleCoinPage;

// before refactoring
  // const fetchSingleCoin = useCallback(async (id) => {
  //   const { data } = await axios.get(SingleData(id));
  //   return data;
  // }, []);

  // useEffect(() => {
  //   fetchSingleCoin(id)
  //   .then((res)=>{
  //     const updatedCoin = res;
  //     setCrypto(updatedCoin);
  //     // console.log("crypto info",crypto);
  //   })
    
  // }, [id]);
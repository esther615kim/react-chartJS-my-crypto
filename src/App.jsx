import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SingleCoinPage from "./pages/SingleCoinPage";
import NewsPage from "./pages/NewsPage";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import SingleNews from './components/News/SingleNews';
import { store } from './store/index';
import { StyledApp,StyledDiv } from './styles/globa.styled';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <StyledApp>
         {/* iPhone Pro 12 */}
        <StyledDiv style={{width:390, height:844}}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/crypto/:id" element={<SingleCoinPage/>} />
          {/* <Route path="/crypto" element={<DetailPage />} /> */}
        </Routes>
        </StyledDiv>
      </StyledApp>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

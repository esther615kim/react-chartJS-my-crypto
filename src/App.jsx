import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SingleCoinPage from "./pages/SingleCoinPage";
import NewsPage from "./pages/NewsPage";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import SingleNews from './components/News/SingleNews';

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/crypto/:id" element={<SingleCoinPage/>} />
          {/* <Route path="/crypto" element={<DetailPage />} /> */}
        </Routes>
      </div>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import NewsPage from "./pages/NewsPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          {/* <Route path="/news" element={<NewsPage />} />
          <Route path="/crypto" element={<DetailPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

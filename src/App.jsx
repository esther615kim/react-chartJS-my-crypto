import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import NewsPage from "./pages/NewsPage";
import LandingPage from "./pages/LandingPage";
import {Provider} from 'react-redux';

import {store} from './store/index';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/news" element={<NewsPage />} />
          {/* <Route path="/crypto" element={<DetailPage />} /> */} 
        </Routes>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CountryDetail, Header, HomePage } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="detail/:id" element={<CountryDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

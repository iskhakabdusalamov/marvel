import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import ComicsPage from "./pages/ComicsPage";
import SinglePage from "./pages/SinglePage";

import "./styles/reset.css";
import "./styles/button.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/single" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default App;

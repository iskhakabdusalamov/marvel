import Header from "./components/header/Header";
import Main from "./pages/Main";
import Comics from "./pages/Comics";
import SingleComic from "./pages/SingleComic";
import SingleChar from "./pages/SingleChar";
import NotFound from "./pages/NotFound";

import "./assets/styles/App.css";
import "./assets/styles/button.css";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<SingleComic />} />
        <Route path="/characters/:id" element={<SingleChar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

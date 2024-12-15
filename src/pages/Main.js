import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import CharSearch from "../components/searchChar/SearchChar";
import vision from "../assets/img/vision.png";

import React from "react";

const Main = () => {
  const [selectedChar, setSelectedChar] = React.useState(null);

  return (
    <div>
      <RandomChar />
      <div className="char__content">
        <CharList onCharSelected={(id) => setSelectedChar(id)} />
        <div>
          <CharInfo selectedChar={selectedChar} />
          <CharSearch />
        </div>
      </div>
      <img className="bg-decoration" src={vision} alt="vision" />
    </div>
  );
};

export default Main;

import React from "react";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

const MainPage = () => {
  const [selectedChar, setChar] = React.useState(null);

  const onClickChar = (id) => {
    setChar(id);
  };

  return (
    <div>
      <RandomChar />
      <div className="char__content">
        <CharList onClickChar={onClickChar} />
        <CharInfo charId={selectedChar} />
      </div>
      <img className="bg-decoration" src="/vision.png" alt="vision" />
    </div>
  );
};

export default MainPage;

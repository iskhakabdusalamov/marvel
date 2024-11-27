import React from "react";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import vision from "../assets/img/vision.png";

const MainPage = () => {
  const visionStyle = {
    position: "absolute",
    right: "-174px",
    bottom: "-70px",
    zIndex: -1,
  };
  return (
    <div>
      <RandomChar />
      <div className="char__content">
        <CharList />
        <CharInfo />
      </div>
      <img style={visionStyle} src={vision} alt="vision" />
    </div>
  );
};

export default MainPage;

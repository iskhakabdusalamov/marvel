import React from "react";
import useMarvelService from "../../services/useMarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import View from "./View";
import "./randomChar.css";

const RandomChar = () => {
  const [char, setChar] = React.useState(null);
  const { getCharacter, loading, error, clearError } = useMarvelService();

  React.useEffect(() => {
    updateChar();
  }, []);

  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
    getCharacter(id).then((char) => {
      setChar(char);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="randomchar">
      {errorMessage}
      {spinner}
      {content}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button onClick={updateChar} className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img
          src="/img/mjolnir.png"
          alt="mjolnir"
          className="randomchar__decoration"
        />
      </div>
    </div>
  );
};

export default RandomChar;

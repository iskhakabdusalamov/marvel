import React from "react";
import useMarvelService from "../../services/useMarvelService";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import View from "./View";
import "./charInfo.css";

const CharInfo = ({ charId }) => {
  const [char, setChar] = React.useState(null);

  const { getCharacter, loading, error, clearError } = useMarvelService();

  React.useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    clearError();
    if (!charId) return;
    getCharacter(charId).then((char) => {
      setChar(char);
    });
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

export default CharInfo;

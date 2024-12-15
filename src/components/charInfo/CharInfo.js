import React from "react";
import useMarvelService from "../../services/useMarvelService";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import View from "./View";
import "./charInfo.css";

const CharInfo = ({ selectedChar }) => {
  const [char, setChar] = React.useState(null);

  const { getCharacter, loading, error, clearError } = useMarvelService();

  React.useEffect(() => {
    updateChar();
  }, [selectedChar]);

  const updateChar = () => {
    clearError();
    if (!selectedChar) return;
    getCharacter(selectedChar).then((char) => setChar(char));
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div>
      <div className="char__info">
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
    </div>
  );
};

export default CharInfo;

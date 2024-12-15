import React from "react";
import useMarvelService from "../../services/useMarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./singleChar.css";

import { useParams } from "react-router-dom";

const SingleChar = () => {
  const { id } = useParams();
  const [char, setChar] = React.useState(null);
  const { getCharacter, loading, error, clearError } = useMarvelService();

  React.useEffect(() => {
    updateChar();
  }, [id]);

  const updateChar = () => {
    clearError();
    getCharacter(id).then((data) => setChar(data));
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage />;
  if (!char) return null;

  return (
    <div className="single-comic">
      <img
        src={char.thumbnail}
        alt={char.name}
        className="single-comic__char-img"
      />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{char.name}</h2>
        <p className="single-comic__descr">{char.description}</p>
      </div>
    </div>
  );
};

export default SingleChar;

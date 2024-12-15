import React from "react";
import useMarvelService from "../../services/useMarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./singleComic.css";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleComic = () => {
  const { id } = useParams();
  const [comic, setComic] = React.useState(null);
  const { getComic, loading, error, clearError } = useMarvelService();

  React.useEffect(() => {
    updateComic();
  }, [id]);

  const updateComic = () => {
    clearError();
    getComic(id).then((comic) => {
      setComic(comic);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div>
      {errorMessage}
      {spinner}
      {!(loading || error || !comic) ? (
        <div className="single-comic">
          <img
            src={comic.thumbnail}
            alt={comic.title}
            className="single-comic__img"
          />
          <div className="single-comic__info">
            <h2 className="single-comic__name">{comic.title}</h2>
            <p className="single-comic__descr">{comic.description}</p>
            <p className="single-comic__descr">{comic.pageCount}</p>
            <p className="single-comic__descr">Language: {comic.language}</p>
            <div className="single-comic__price">{comic.price}</div>
          </div>
          <Link to="/comics" className="single-comic__back">
            Back to all
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default SingleComic;

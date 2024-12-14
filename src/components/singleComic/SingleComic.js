import React from "react";
import { useParams } from "react-router-dom";
import useMarvelService from "../../services/useMarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import View from "./View";
import "./singleComic.css";

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = React.useState(null);
  const { getComic, loading, error, clearError } = useMarvelService();

  React.useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then((comic) => {
      setComic(comic);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <div>
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

export default SingleComicPage;

import React from "react";
import useMarvelService from "../../services/useMarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./charList.css";

const CharList = ({ onCharSelected }) => {
  const [charList, setCharList] = React.useState([]);
  const [newItemLoading, setNewItemLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(210);
  const [charEnded, setCharEnded] = React.useState(false);

  const { getAllCharacters, loading, error } = useMarvelService();

  React.useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList) => {
    let charEnded = false;
    if (newCharList.length < 9) {
      charEnded = true;
    }

    setCharList((prevCharList) => {
      const uniqueChars = newCharList.filter(
        (newChar) => !prevCharList.some((char) => char.id === newChar.id)
      );
      return [...prevCharList, ...uniqueChars];
    });

    setNewItemLoading(false);
    setOffset((prevOffset) => prevOffset + 9);
    setCharEnded(charEnded);
  };

  const itemRefs = React.useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  function renderItems(array) {
    const items = array.map((item, index) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }

      return (
        <li
          className="char__item"
          ref={(el) => (itemRefs.current[index] = el)}
          key={item.id}
          onClick={() => {
            onCharSelected(item.id);
            focusOnItem(index);
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    return <ul className="char__grid">{items}</ul>;
  }

  const items = renderItems(charList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div>
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;

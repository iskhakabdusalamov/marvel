import "./charList.css";
import abyss from "../../assets/img/abyss.jpg";

const CharList = () => {
  const characters = [
    "Abyss",
    "Abyss",
    "Abyss",
    "Abyss",
    "Abyss",
    "Abyss",
    "Abyss",
    "Abyss",
    "Abyss",
  ];
  return (
    <div className="char__list">
      <ul className="char__grid">
        {characters.map((items) => (
          <li className="char__item">
            <img src={abyss} alt="abyss" />
            <div className="char__name">{items}</div>
          </li>
        ))}
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;

import "./charList.css";

const CharList = () => {
  return (
    <div className="char__list">
      <ul className="char__grid">
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
        <li className="char__item">
          <img src="/img/abyss.jpg" alt="abyss" />
          <div className="char__name">Abyss</div>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;

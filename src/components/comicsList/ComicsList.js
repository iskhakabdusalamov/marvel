import "./comicsList.css";
import uw from "../../assets/img/UW.png";
import xMen from "../../assets/img/x-men.png";
import { useNavigate } from "react-router-dom";

const ComicsList = () => {
  const navigate = useNavigate();

  const handleComicClick = () => {
    navigate("/single");
  };
  return (
    <div className="comics__list">
      <ul className="comics__grid">
        <li className="comics__item" onClick={handleComicClick}>
          <img src={uw} alt="ultimate war" className="comics__item-img" />
          <div className="comics__item-name">
            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
          </div>
          <div className="comics__item-price">9.99$</div>
        </li>
        <li className="comics__item" onClick={handleComicClick}>
          <img src={xMen} alt="x-men" className="comics__item-img" />
          <div className="comics__item-name">X-Men: Days of Future Past</div>
          <div className="comics__item-price">NOT AVAILABLE</div>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;

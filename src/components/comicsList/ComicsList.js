import { useNavigate } from "react-router-dom";
import "./comicsList.css";
import uw from "../../assets/img/UW.png";
// import xMen from "../../assets/img/x-men.png";

const ComicsList = () => {
  const navigate = useNavigate();

  const comics = [
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
    {
      title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
      price: "9.99$",
      image: { uw },
    },
  ];

  const handleComicClick = () => {
    navigate("/singleComic");
  };
  return (
    <div className="comics__list">
      <ul className="comics__grid">
        {comics.map((items) => (
          <li className="comics__item" onClick={handleComicClick}>
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">{items.title}</div>
            <div className="comics__item-price">{items.price}</div>
          </li>
        ))}
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;

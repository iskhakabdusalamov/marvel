import "./banner.css";
import avengers from "../../assets/img/avengers.png";
import logo from "../../assets/img/logo.png";

const Banner = () => {
  return (
    <div className="app__banner">
      <img src={avengers} alt="Avengers" />
      <div className="app__banner-text">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Banner;

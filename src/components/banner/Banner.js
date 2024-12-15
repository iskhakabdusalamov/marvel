import "./banner.css";
import avengers from "../../assets/img/avengers.png";
import logo from "../../assets/img/logo.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={avengers} alt="avengers" />
      <div className="bannerMessage">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Banner;

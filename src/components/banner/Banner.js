import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src="/img/avengers.png" alt="avengers" />
      <div className="bannerMessage">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src="/img/logo.png" alt="logo" />
    </div>
  );
};

export default Banner;

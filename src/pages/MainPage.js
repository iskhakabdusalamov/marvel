import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

const MainPage = () => {
  return (
    <div>
      <RandomChar />
      <div className="char__content">
        <CharList />
        <CharInfo />
      </div>
      <img className="bg-decoration" src="/img/vision" alt="vision" />
    </div>
  );
};

export default MainPage;

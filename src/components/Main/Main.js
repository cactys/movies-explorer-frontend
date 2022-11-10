import AboutAuthor from '../AboutAuthor/AboutAuthor';
import AboutProject from '../AboutProject/AboutProject';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutAuthor />
      <Portfolio />
    </main>
  );
};

export default Main;

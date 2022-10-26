import AboutProject from '../AboutProject/AboutProject';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

const Main = () => {
  return (
      <div className='content'>
        <Promo />
        <AboutProject />
        <Techs />
        <Portfolio />
      </div>
  )
}

export default Main
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import './Main.css';

const Main = () => {
  return (
      <div className='content'>
        <Promo />
        <AboutProject />
      </div>
  )
}

export default Main
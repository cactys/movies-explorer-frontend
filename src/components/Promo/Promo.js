import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__article">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className="promo__learn-more" to="/signup">
            Узнать больше
          </Link>
        </div>
        <img className="promo__logo" src={landingLogo} alt="Логотип Промо" />
      </div>
    </section>
  );
};

export default Promo;

import './Portfolio.css';
import arrowLink from '../../images/arrow_link.svg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__navigation">
        <li className="portfolio__navigation-item">
          <a className="portfolio__navigation-link" href="/">
            Статичный сайт
            <img
              className="portfolio__navigation-arrow"
              src={arrowLink}
              alt="Стрелка"
            />
          </a>
        </li>
        <li className="portfolio__navigation-item">
          <a className="portfolio__navigation-link" href="/">
            Адаптивный сайт
            <img
              className="portfolio__navigation-arrow"
              src={arrowLink}
              alt="Стрелка"
            />
          </a>
        </li>
        <li className="portfolio__navigation-item">
          <a className="portfolio__navigation-link" href="/">
            Одностраничное приложение
            <img
              className="portfolio__navigation-arrow"
              src={arrowLink}
              alt="Стрелка"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;

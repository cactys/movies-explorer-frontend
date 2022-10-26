import './Portfolio.css';
import avatar from '../../images/avatar.jpg';
import arrowLink from '../../images/arrow_link.svg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Студент</h2>
      <address className="portfolio__author">
        <h3 className="portfolio__author-name">Виталий</h3>
        <p className="portfolio__author-about">Фронтенд-разработчик, 30 лет</p>
        <p className='portfolio__author-description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className='portfolio__author-link' href='https://github.com/cactys'>Github</a>
      </address>
      <img src={avatar} alt='Аватар' />
      <p className='portfolio__navigation'>Портфолио</p>
      <ul className='portfolio__navigation-list'>
        <li className='portfolio__navigation-item'>
          <a className='portfolio__navigation-link' href='/'>
          Статичный сайт
          </a>
          <img className='portfolio__navigation-arrow' src={arrowLink} alt='Стрелка' />
        </li>
        <li className='portfolio__navigation-item'>
          <a className='portfolio__navigation-link' href='/'>
          Адаптивный сайт
          </a>
          <img className='portfolio__navigation-arrow' src={arrowLink} alt='Стрелка' />
        </li>
        <li className='portfolio__navigation-item'>
          <a className='portfolio__navigation-link' href='/'>
          Одностраничное приложение
          </a>
          <img className='portfolio__navigation-arrow' src={arrowLink} alt='Стрелка' />
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;

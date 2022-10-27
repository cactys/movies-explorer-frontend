import './AboutAuthor.css';
import avatar from '../../images/avatar.jpg';

const AboutAuthor = () => {
  return (
    <div className='about-author'>
    <h2 className="about-author__title">Студент</h2>
      <div className="about-author__container">
        <address className="about-author__block">
          <h3 className="about-author__author-name">Владимир</h3>
          <p className="about-author__author-about">Фронтенд-разработчик, 38 лет</p>
          <p className="about-author__author-description">
            Я живу в городе Москва. Я люблю слушать музыку, а ещё увлекаюсь
            продюсированием той самой музыки. Недавно начал кодить. Более 16 лет
            работаю системный администратором. После того, как закончу курс по
            веб-разработке, начну активно заниматься поиском новой карьеры.
          </p>
          <a
            className="about-author__author-link"
            href="https://github.com/cactys"
            target="blanck"
          >
            Github
          </a>
        </address>
        <img className="about-author__author-avatar" src={avatar} alt="Аватар" />
      </div></div>
  )
}

export default AboutAuthor
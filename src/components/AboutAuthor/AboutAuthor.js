import './AboutAuthor.css';
import avatar from '../../images/avatar.jpg';

const AboutAuthor = () => {
  return (
    <section className="about-author">
      <h2 className="about-author__title">Студент</h2>
      <div className="about-author__container">
        <address className="about-author__block">
          <h3 className="about-author__author-name">Владимир</h3>
          <p className="about-author__author-about">
            Фронтенд-разработчик, 38 лет
          </p>
          <ul className='about-author__description-list'>
            <li className="about-author__author-description">
              Я работаю в сфере IT более 17 лет и за это время накопил
              значительный опыт в области системного администрирования. Я
              ответственный и дисциплинированный специалист, готовый решать
              любые задачи, связанные с настройкой, обслуживанием и мониторингом
              компьютерных систем. Я также имею знания в области сетевой
              безопасности, что позволяет мне обеспечивать защиту информации и
              данных на компьютерных сетях.
            </li>
            <li className="about-author__author-description">
              Недавно я начал изучать разработку веб-приложений и прохожу
              обучение на курсе "Frontend разработчик" в Яндекс Практикуме. За
              время обучения я узнал много нового о создании интерактивных
              пользовательских интерфейсов, работе с базами данных,
              веб-технологиях и тестировании кода. Я уверен, что приобретенные
              знания помогут мне стать успешным Frontend разработчиком и
              реализовать свои профессиональные амбиции.
            </li>
            <li className="about-author__author-description">
              Я стремлюсь к профессиональному развитию и всегда открыт новым
              вызовам и задачам. Я уверен, что мои знания и опыт в системном
              администрировании в сочетании с навыками веб-разработки позволят
              мне эффективно работать в команде и достигать высоких результатов.
              Я готов к новым проектам и ищу возможности для роста и развития в
              своей новой профессии.
            </li>
          </ul>
          <a
            className="about-author__author-link"
            href="https://github.com/cactys"
            target="blanc"
          >
            Github
          </a>
        </address>
        <img
          className="about-author__author-avatar"
          src={avatar}
          alt="Аватар"
        />
      </div>
    </section>
  );
};

export default AboutAuthor;

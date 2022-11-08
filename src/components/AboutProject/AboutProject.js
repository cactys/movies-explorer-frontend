import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__cards">
        <li className="about-project__card">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__card">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__grid">
        <li className="about-project__grid-item about-project__grid-item_frontend-week">
          1 неделя
        </li>
        <li className="about-project__grid-item about-project__grid-item_backend-week">
          4 недели
        </li>
        <li className="about-project__grid-item about-project__grid-item_frontend">
          Back-end
        </li>
        <li className="about-project__grid-item about-project__grid-item_backend">
          Front-end
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;

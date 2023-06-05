import { techList } from '../../utils/constants';
import './Techs.css';

const Techs = () => {
  console.log(techList);
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">{techList.length} технологий</h3>
        <p className="techs__about">
          На курсах Яндекс.Практикум освоил технологии, которые применил в
          учебном и дипломном проекте.
        </p>
        <ul className="techs__items">
          {techList?.map((item, index) => {
            return (
              <li className="techs__item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Techs;

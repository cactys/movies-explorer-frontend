import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__about">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <span className="footer__separator" />
        <div className="footer__copyright">
          <p className="footer__year">&copy; 2022</p>
          <ul className="footer__nav-box">
            <li className="footer__nav-item">
              <a
                className="footer__nav-link"
                href="https://practicum.yandex.ru/"
                target="blanck"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav-item">
              <a
                className="footer__nav-link"
                href="https://github.com/cactys"
                target="blanck"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

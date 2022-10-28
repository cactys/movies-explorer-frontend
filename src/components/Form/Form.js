import './Form.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Form = ({ name, title, buttonText, text, path, link, children }) => {
  return (
    <form className="form">
      <div className="form__header">
        <Logo />
        <h2 className="form__title">{title}</h2>
      </div>
      {children}
      <div className="form__footer">
        <button type="submit" className="form__submit">
          {buttonText}
        </button>
        <div className="form__question">
          <p className="form__text">{text}</p>
          <Link className="form__link" to={path}>
            {link}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Form;

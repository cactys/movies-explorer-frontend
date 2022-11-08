import './AuthForm.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Form = ({ title, buttonText, text, path, link, children }) => {
  return (
    <form className="auth-form">
      <section className="auth-form__header">
        <Logo />
        <h2 className="auth-form__title">{title}</h2>
      </section>
      {children}
      <section className="auth-form__footer">
        <button type="submit" className="auth-form__submit">
          {buttonText}
        </button>
        <div className="auth-form__question">
          <p className="auth-form__text">{text}</p>
          <Link className="auth-form__link" to={path}>
            {link}
          </Link>
        </div>
      </section>
    </form>
  );
};

export default Form;

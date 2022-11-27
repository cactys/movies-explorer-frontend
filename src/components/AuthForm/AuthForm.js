import './AuthForm.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Form = ({
  onSubmit,
  title,
  buttonText,
  text,
  path,
  link,
  children,
  isValid,
  // messageError,
  // errorActive,
}) => {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="auth-form__header">
        <Logo />
        <h2 className="auth-form__title">{title}</h2>
      </div>
      {children}
      <div className="auth-form__footer">
        {/* <span
          className={`auth-form__error-message ${
            errorActive ? 'auth-form__error-message_active' : ''
          }`}
        >
          {messageError}
        </span> */}
        <button
          type="submit"
          className={`auth-form__submit ${
            !isValid ? 'auth-form__submit_disable' : ''
          }`}
          disabled={!isValid}
        >
          {buttonText}
        </button>
        <div className="auth-form__question">
          <p className="auth-form__text">{text}</p>
          <Link className="auth-form__link" to={path}>
            {link}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Form;

import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';

const SignIn = ({ handleLogin, inputError, errorSpan }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!data.email || !data.password) {
      return;
    }
    const { email, password } = data;
    handleLogin(email, password);
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      name="signin"
      title="Рады видеть!"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
    >
      <fieldset className="auth-form__set-auth">
        <label className="auth-form__field">
          <span className="auth-form__input-title">E-mail</span>
          <input
            type="email"
            placeholder="E-mail"
            className={`auth-form__input ${
              inputError ? `auth-form__input_error` : ''
            }`}
            id="input-email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <span
            className={`auth-form__error ${
              errorSpan ? `auth-form__error_active` : ''
            } input-email-error`}
          >
            Что-то пошло не так...
          </span>
        </label>
        <label className="auth-form__field">
          <span className="auth-form__input-title">Пароль</span>
          <input
            type="password"
            placeholder="Пароль"
            className={`auth-form__input ${
              inputError ? `auth-form__input_error` : ''
            }`}
            id="input-password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <span
            className={`auth-form__error ${
              errorSpan ? `auth-form__error_active` : ''
            } input-password-error`}
          >
            Что-то пошло не так...
          </span>
        </label>
      </fieldset>
    </AuthForm>
  );
};

export default SignIn;

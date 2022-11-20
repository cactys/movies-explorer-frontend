import { useEffect } from 'react';
import useValidationForm from '../../hooks/useValidationForm';
import AuthForm from '../AuthForm/AuthForm';

const SignIn = ({ handleLogin, messageError }) => {
  const { values, handleChange, resetForm, errors, isValid } =
    useValidationForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <AuthForm
      onSubmit={handleSubmit}
      name="signin"
      title="Рады видеть!"
      buttonText="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
      isValid={isValid}
      messageError={messageError}
    >
      <fieldset className="auth-form__set-auth">
        <label className="auth-form__field">
          <span className="auth-form__input-title">E-mail</span>
          <input
            type="email"
            placeholder="E-mail"
            className={`auth-form__input ${
              errors.email ? `auth-form__input_error` : ''
            }`}
            id="input-email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            required
          />
          <span
            className={`auth-form__error ${
              errors.email ? `auth-form__error_active` : ''
            } input-email-error`}
          >
            {errors.email}
          </span>
        </label>
        <label className="auth-form__field">
          <span className="auth-form__input-title">Пароль</span>
          <input
            type="password"
            placeholder="Пароль"
            className={`auth-form__input ${
              errors.password ? `auth-form__input_error` : ''
            }`}
            id="input-password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            required
          />
          <span
            className={`auth-form__error ${
              errors.password ? `auth-form__error_active` : ''
            } input-password-error`}
          >
            {errors.password}
          </span>
        </label>
      </fieldset>
    </AuthForm>
  );
};

export default SignIn;

import Form from '../AuthForm/AuthForm';

const SignIn = ({ inputError, errorSpan }) => {
  return (
    <Form
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
            name="name"
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
    </Form>
  );
};

export default SignIn;

import Form from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';

const SignIn = () => {
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
        <FormField
          className="auth-form"
          name="E-mail"
          type="email"
          placeholder="Email"
          id="input-email"
          inputName="email"
          inputError={false}
          errorSpan={false}
        />
        <FormField
          className="auth-form"
          name="Пароль"
          type="password"
          placeholder="Пароль"
          id="input-password"
          inputName="password"
          inputError={false}
          errorSpan={false}
        />
      </fieldset>
    </Form>
  );
};

export default SignIn;

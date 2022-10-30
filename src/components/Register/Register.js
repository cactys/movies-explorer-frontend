import AuthForm from '../AuthForm/AuthForm';
import FormField from '../FormField/FormField';

const SignUp = () => {
  return (
    <AuthForm
      name="signup"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
    >
      <fieldset className="auth-form__set-auth">
        <FormField
          className="auth-form"
          name="Имя"
          type="name"
          placeholder="Имя"
          id="input-name"
          inputName="name"
          minLength="2"
          maxLength="30"
          inputError={false}
          errorSpan={false}
        />
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
          inputError={true}
          errorSpan={true}
        />
      </fieldset>
    </AuthForm>
  );
};

export default SignUp;

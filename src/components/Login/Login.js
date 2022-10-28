import Form from '../Form/Form';
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
      <fieldset className="form__set-auth">
        <FormField
          name="E-mail"
          type="email"
          placeholder="Email"
          id="edit-email"
          inputName="email"
          inputError={false}
          errorSpan={false}
        />
        <FormField
          name="Пароль"
          type="password"
          placeholder="Пароль"
          id="edit-password"
          inputName="password"
          inputError={false}
          errorSpan={false}
        />
      </fieldset>
    </Form>
  );
};

export default SignIn;

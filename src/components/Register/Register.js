import Form from '../Form/Form';
import FormField from '../FormField/FormField';

const SignUp = () => {
  return (
    <Form
      name="signup"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
    >
      <fieldset className="form__set-auth">
        <FormField
          name="Имя"
          type="name"
          placeholder="Имя"
          id="edit-name"
          inputName="name"
          minLength="2"
          maxLength="30"
          inputError={false}
          errorSpan={false}
        />
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
          inputError={true}
          errorSpan={true}
        />
      </fieldset>
    </Form>
  );
};

export default SignUp;

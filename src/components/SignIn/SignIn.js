import { useContext } from 'react';
import { Context } from '../App/App';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import './SignIn.css';

const SignIn = () => {
  const { email } = useContext(Context);
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
          // value={email}
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

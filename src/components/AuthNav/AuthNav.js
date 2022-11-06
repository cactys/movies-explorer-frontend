import { Link } from "react-router-dom";
import "./AuthNav.css";

const AuthNav = () => {
  return (
    <div className="auth-nav">
      <Link className="auth-nav__link auth-nav__link_signup" to="/signup">
        Регистрация
      </Link>
      <Link className="auth-nav__link auth-nav__link_signin" to="/signin">
        Войти
      </Link>
    </div>
  );
};

export default AuthNav;

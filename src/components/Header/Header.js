import './Header.css';
import logo from '../../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';

const Header = ({ email }) => {
  return (
    <Switch>
      <div className="header">
        <Route path="/">
          <Link className="header__logo-link" to="/">
            <img src={logo} className="header__logo" alt="Логотип" />
          </Link>
        </Route>
        <div className="header__nav-container">
          <Route path="/">
            <Link className="header__nav-link header__nav-link_signup" to="/signup">
              Регистрация
            </Link>
            <Link className="header__nav-link header__nav-link_signin" to="/signin">
              Войти
            </Link>
          </Route>
        </div>
      </div>
    </Switch>
  );
};

export default Header;

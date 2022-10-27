import { Link, Route } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/logo.svg'

const Logo = () => {
  return (
    <div className="logo">
      <Route path="/">
        <Link className="logo__link" to="/">
          <img src={logo} className="logo__img" alt="Логотип" />
        </Link>
      </Route>
    </div>
  );
};

export default Logo;

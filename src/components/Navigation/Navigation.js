import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import profileIcon from '../../images/profile-icon.svg';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__main">
        <div className="navigation__auth">
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link"
            activeClassName="navigation__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile" className="navigation__profile">
          Аккаунт{' '}
          <img
            className="navigation__profile-icon"
            src={profileIcon}
            alt="Аккаунт"
          />
        </Link>
      </div>
      <div className='navigation__burger'>
        <div className='navigation__burger-btn'>
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

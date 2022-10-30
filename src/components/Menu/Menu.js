import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';
import './Menu.css';

const Menu = ({ active, setActive }) => {
  return (
    <div
      className={`menu ${active ? 'menu_active' : ''}`}
      onClick={() => setActive(false)}
    >
      <div className="menu__blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <Link to="/" className="menu__main">
          Главная
        </Link>
        <div className="menu__container">
          <div className="menu__links">
            <NavLink
              to="/movies"
              className="menu__link"
              activeClassName="menu__link_active"
              onClick={() => setActive(false)}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="menu__link"
              activeClassName="menu__link_active"
              onClick={() => setActive(false)}
            >
              Сохранённые фильмы
            </NavLink>
          </div>
        </div>
        <Link
          to="/profile"
          className="menu__profile"
          onClick={() => setActive(false)}
        >
          Аккаунт
          <img className="menu__profile-icon" src={profileIcon} alt="Аккаунт" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;

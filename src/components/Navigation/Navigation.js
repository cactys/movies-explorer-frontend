import { Link } from 'react-router-dom';
import './Navigation.css';
import profileIcon from '../../images/profile-icon.svg';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__auth">
        <Link to="/movies" className="navigation__link navigation__link_active">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__link">
          Сохранённые фильмы
        </Link>
      </div>
      <Link to='/profile' className='navigation__profile'>
        Аккаунт <img className='navigation__profile-icon' src={profileIcon} alt='Аккаунт' />
      </Link>
    </nav>
  );
};

export default Navigation;

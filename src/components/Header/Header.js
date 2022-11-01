import './Header.css';
import Logo from '../Logo/Logo';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  return (
    <div className={`header ${!loggedIn ? 'header_auth' : ''}`}>
      <div className="header__container">
        <Logo />
        {!loggedIn ? <AuthNav /> : <Navigation />}
      </div>
    </div>
  );
};

export default Header;

import './Header.css';
import Logo from '../Logo/Logo';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  return (
    <div className={`header ${!loggedIn ? 'header_auth' : ''}`}>
        <Logo />
        {!loggedIn ? <AuthNav /> : <Navigation />}
    </div>
  );
};

export default Header;

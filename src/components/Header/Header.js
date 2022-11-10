import './Header.css';
import Logo from '../Logo/Logo';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
  return (
    <header className={`header ${!loggedIn ? 'header_auth' : ''}`}>
      <section className="header__container">
        <Logo />
        {!loggedIn ? <AuthNav /> : <Navigation />}
      </section>
    </header>
  );
};

export default Header;

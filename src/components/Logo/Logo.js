import { Link, Route } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Route path="/">
        <Link className="logo__link" to="/" />
      </Route>
    </div>
  );
};

export default Logo;

import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <section className="logo">
      <Link className="logo__link" to="/" />
    </section>
  );
};

export default Logo;

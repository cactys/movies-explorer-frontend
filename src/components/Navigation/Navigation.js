import './Navigation.css';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import { useState } from 'react';

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="navigation">
      <Menu active={menuActive} setActive={setMenuActive} />
      <Burger menuActive={menuActive} setMenuActive={setMenuActive} />
    </nav>
  );
};

export default Navigation;

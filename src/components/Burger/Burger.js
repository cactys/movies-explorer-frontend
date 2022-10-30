import './Burger.css';

const Burger = ({ menuActive, setMenuActive }) => {
  return (
    <div className="burger">
      <div className="burger__button" onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
    </div>
  );
};

export default Burger;

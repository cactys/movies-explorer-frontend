import './Burger.css';

const Burger = ({ menuActive, setMenuActive }) => {
  return (
    <section className="burger">
      <div
        className={`burger__button ${
          menuActive ? 'burger__button_active' : ''
        }`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span />
      </div>
    </section>
  );
};

export default Burger;

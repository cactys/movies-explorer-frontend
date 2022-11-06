import "./Burger.css";

const Burger = ({ menuActive, setMenuActive }) => {
  return (
    <div className="burger">
      <div
        className={`burger__button ${
          menuActive ? "burger__button_active" : ""
        }`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span />
      </div>
    </div>
  );
};

export default Burger;

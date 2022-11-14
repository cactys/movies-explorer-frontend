import './FilterCheckbox.css';

const FilterCheckbox = ({ checked, setChecked, handleFilterCheckbox }) => {
  return (
      <label className="filter-checkbox">
        <input
          type="checkbox"
          id="input-checkbox"
          className="filter-checkbox__checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="filter-checkbox__checkbox-buble" />
        <span className="filter-checkbox__checkbox-title">Короткометражки</span>
      </label>
  );
};

export default FilterCheckbox;

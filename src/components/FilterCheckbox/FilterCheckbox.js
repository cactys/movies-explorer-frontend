import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <fieldset className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          type="checkbox"
          id="input-checkbox"
          className="filter-checkbox__checkbox"
        />
        <span className="filter-checkbox__checkbox-buble" />
      </label>
      <span className="filter-checkbox__checkbox-title">Короткометражки</span>
    </fieldset>
  );
};

export default FilterCheckbox;

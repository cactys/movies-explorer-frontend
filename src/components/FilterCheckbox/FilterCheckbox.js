import './FilterCheckbox.css';

const FilterCheckbox = ({ handleShortFilter, filterCheckbox }) => {
  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        id="input-checkbox"
        className="filter-checkbox__checkbox"
        checked={filterCheckbox ? true : false}
        onChange={handleShortFilter}
      />
      <span className="filter-checkbox__checkbox-buble" />
      <span className="filter-checkbox__checkbox-title">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;

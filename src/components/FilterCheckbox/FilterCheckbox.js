import { useHistory } from 'react-router-dom';
import './FilterCheckbox.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from 'react';

const FilterCheckbox = ({ checked, setChecked }) => {
  const currentUser = useContext(CurrentUserContext);
  const history = useHistory();
  const handleShortChecked = () => {
    if (history.location.pathname === '/movies') {
      localStorage.setItem(`${currentUser.email} - shortMovie`, checked);
      setChecked(!checked);
    } else {
      setChecked(!checked);
    }
  };

  return (
    <label className="filter-checkbox">
      <input
        type="checkbox"
        id="input-checkbox"
        className="filter-checkbox__checkbox"
        checked={checked}
        onChange={handleShortChecked}
      />
      <span className="filter-checkbox__checkbox-buble" />
      <span className="filter-checkbox__checkbox-title">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;

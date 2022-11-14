import useValidationForm from '../../hooks/useValidationForm';
import './SearchForm.css';

const SearchForm = () => {
  const { values, handleChange, isValid, setIsValid } = useValidationForm();
  return (
    <label className="search-form">
      <form className="search-form__form">
        <span className="search-form__magnifier" />
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__search-bar"
          id="search-movies"
          name="search"
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <button className="search-form__search-btn" type="submit">
          Найти
        </button>
      </form>
    </label>
  );
};

export default SearchForm;

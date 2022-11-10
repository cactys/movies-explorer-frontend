import './SearchForm.css';

const SearchForm = () => {
  return (
    <label className="search-form">
      <span className="search-form__magnifier" />
      <input
        type="text"
        placeholder="Фильм"
        className="search-form__search-bar"
        id="search-movies"
        name="search"
        required
      />
      <button className="search-form__search-btn" type="submit">
        Найти
      </button>
    </label>
  );
};

export default SearchForm;

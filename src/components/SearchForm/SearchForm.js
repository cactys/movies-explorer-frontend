import './SearchForm.css';

const SearchForm = () => {
  return (
    <fieldset className="search-form">
      <label className="search-form__search-lable">
        <span className="search-form__magnifier" />
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__search-bar"
          id="search-movies"
          name="search"
        />
        <button className="search-form__search-btn" type="button">
          Найти
        </button>
      </label>
      <div className="search-form__switch-container">
        <label className="search-form__switch">
          <input
            type="checkbox"
            id="input-checkbox"
            className="search-form__checkbox"
          />
          <span className="search-form__checkbox-buble" />
        </label>
        <span className="search-form__checkbox-title">Короткометражки</span>
      </div>
    </fieldset>
  );
};

export default SearchForm;

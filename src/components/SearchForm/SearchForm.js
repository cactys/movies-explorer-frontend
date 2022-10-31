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
      </label>
      <dev className="search-form__switch-container">
        <label className="search-form__switch">
          <input
            type="checkbox"
            id="input-checkbox"
            className="search-form__checkbox"
          />
          <span className="search-form__checkbox-buble" />
        </label>
        <span className="search-form__checkbox-title">Короткометражки</span>
      </dev>
    </fieldset>
  );
};

export default SearchForm;

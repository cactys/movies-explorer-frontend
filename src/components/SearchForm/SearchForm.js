import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useValidationForm from '../../hooks/useValidationForm';
import { MESSAGE } from '../../utils/constants';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit, isLoading }) => {
  const { enterKeyword } = MESSAGE;
  const { values, handleChange, isValid, setIsValid } = useValidationForm();
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      if (
        history.location.pathname === '/movies' &&
        localStorage.getItem('query-movies')
      ) {
        localStorage.setItem('query-movies', values.search);
      }
      handleSearchSubmit(values.search);
    } else {
      if (
        history.location.pathname === '/movies' &&
        localStorage.getItem('query-movies')
      ) {
        localStorage.setItem('query-movies', '');
      }
      if (history.location.pathname === '/saved-movies') {
        handleSearchSubmit('');
      }
      setErrorMessage(enterKeyword);
    }
  };

  useEffect(() => {
    if (
      history.location.pathname === '/movies' &&
      localStorage.getItem('query-movies')
    ) {
      const searchValue = localStorage.getItem('query-movies');
      values.search = searchValue;
      setIsValid(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, setIsValid]);

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  return (
    <label className="search-form">
      <form className="search-form__form" noValidate onSubmit={handleSubmit}>
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
          disabled={isLoading}
        />
        <button
          className={`search-form__search-btn ${
            !isValid || isLoading ? 'search-form__search-btn_disabled' : ''
          }`}
          type="submit"
        >
          Найти
        </button>
      </form>
      <span className="search-form__error">{errorMessage}</span>
    </label>
  );
};

export default SearchForm;

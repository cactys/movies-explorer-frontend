import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useValidationForm from '../../hooks/useValidationForm';
import { MESSAGE } from '../../utils/constants';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit }) => {
  const { enterKeyword } = MESSAGE;
  const { values, handleChange, isValid, setIsValid } = useValidationForm();
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      handleSearchSubmit(values.search);
    } else {
      setErrorMessage(enterKeyword);
    }
  };

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  useEffect(() => {
    if (history.location.pathname === '/movies' && values.search) {
      localStorage.setItem('search-movies', values.search);
      setIsValid(true);
    }

    if (
      history.location.pathname === '/movies' &&
      localStorage.getItem('search-movies')
    ) {
      const searchValue = localStorage.getItem('search-movies');
      values.search = searchValue;
    }
  }, [history, setIsValid, values]);

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
        />
        <button className="search-form__search-btn" type="submit">
          Найти
        </button>
      </form>
      <span className="search-form__error">{errorMessage}</span>
    </label>
  );
};

export default SearchForm;

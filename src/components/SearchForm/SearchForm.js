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
      console.log(values);
    } else {
      setErrorMessage(enterKeyword);
      if (history.location.pathname === '/saved-movies') {
        handleSearchSubmit('');
      }
    }
  };

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  useEffect(() => {
    if (history.location.pathname === '/movies' && values.search) {
      localStorage.setItem('query-movies', values.search);
    }
  }, [history, values]);

  // useEffect(() => {
  //   if (!isValid) {
  //     setErrorMessage(enterKeyword);
  //   }
  // }, [isValid, enterKeyword]);

  useEffect(() => {
    if (
      history.location.pathname === '/movies' &&
      localStorage.getItem('query-movies')
    ) {
      const searchValue = localStorage.getItem('query-movies');
      values.search = searchValue;
      // setErrorMessage('');
      // setIsValid(true);
    }
  }, [history, values, setIsValid]);

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
        <button
          className={`search-form__search-btn ${
            !isValid ? 'search-form__search-btn_disabled' : ''
          }`}
          type="submit"
          // disabled={!isValid}
        >
          Найти
        </button>
      </form>
      <span className="search-form__error">{errorMessage}</span>
    </label>
  );
};

export default SearchForm;

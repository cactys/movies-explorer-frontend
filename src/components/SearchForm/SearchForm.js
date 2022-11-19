import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useValidationForm from '../../hooks/useValidationForm';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit }) => {
  const { values, handleChange, isValid, setIsValid } = useValidationForm();
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values.search);
    if (isValid) {
      handleSearchSubmit(values.search);
    } else {
      setErrorMessage('Нужно ввести ключевое слово');
    }
  };

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  useEffect(() => {
    if (history.location.pathname === '/movies') {
      // localStorage.setItem('search-movies', values.search);
      const searchValue = localStorage.getItem('search-movies');
      values.search = searchValue;
      // setIsValid(true);
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
        <span>{errorMessage}</span>
        <button className="search-form__search-btn" type="submit">
          Найти
        </button>
      </form>
    </label>
  );
};

export default SearchForm;

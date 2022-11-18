import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useValidationForm from '../../hooks/useValidationForm';
import './SearchForm.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const SearchForm = ({ handleSearchSubmit }) => {
  const { values, handleChange, isValid, setIsValid } = useValidationForm();
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const currentUser = useContext(CurrentUserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      handleSearchSubmit(values.search);
    } else {
      setErrorMessage('Нужно ввести ключевое слово');
    }
  };

  useEffect(() => {
    if (
      history.location.pathname === '/movies' &&
      localStorage.getItem(`${currentUser.email} - searchMovies`)
    ) {
      const searchValue = localStorage.getItem(
        `${currentUser.email} - searchMovies`
      );
      values.search = searchValue;
      setIsValid(true);
    }
  }, [currentUser, history, setIsValid, values]);

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
          value={values.search}
          onChange={handleChange}
          autoComplete="off"
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

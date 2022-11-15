import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useValidationForm from '../../hooks/useValidationForm';
import './SearchForm.css';

const SearchForm = ({ handleSearchSubmit }) => {
  const {
    values,
    handleChange,
    isValid,
    errors,
    setErrors,
    resetForm,
    setIsValid,
  } = useValidationForm();

  const [errorQuery, setErrorQuery] = useState('');

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // handleSearchSubmit(values);
    isValid
      ? handleSearchSubmit(values.search)
      : setErrorQuery('Введите ключевое слово');
  };

  useEffect(() => {
    setErrorQuery('');
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
          autoComplete="off"
          required
        />
        <span>{errorQuery}</span>
        <button className="search-form__search-btn" type="submit">
          Найти
        </button>
      </form>
    </label>
  );
};

export default SearchForm;

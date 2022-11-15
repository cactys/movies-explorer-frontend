import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useValidationForm from '../../hooks/useValidationForm';
import './Profile.css';

const Profile = ({ signOut, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { values, handleChange, resetForm, errors, isValid } =
    useValidationForm();

  // const handleNameChange = (evt) => {
  //   setName(evt.target.value);
  // };

  // const handleEmailChange = (evt) => {
  //   setEmail(evt.target.value);
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(values);
  };

  useEffect(() => {
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
    resetForm();
  }, [currentUser, resetForm]);

  console.log(isValid);

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {name}</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
        <fieldset className="profile__set-profile">
          <label className="profile__field">
            <span className="profile__input-title">Имя</span>
            <input
              type="text"
              placeholder="Имя"
              className="profile__input"
              id="edit-name"
              name="name"
              required
              minLength="2"
              maxLength="30"
              value={values.name || name || ''}
              onChange={handleChange}
            />
          </label>
          <span>{errors.name}</span>
          <label className="profile__field">
            <span className="profile__input-title">E-mail</span>
            <input
              type="email"
              placeholder="E-mail"
              className="profile__input"
              id="edit-email"
              name="email"
              required
              value={values.email || email || ''}
              onChange={handleChange}
            />
          </label>
          <span>{errors.email}</span>
        </fieldset>
        <nav className="profile__navigation">
          <button
            type="submit"
            disabled={!isValid}
            className={`profile__edit-profile ${
              !isValid ? 'profile__edit-profile_disable' : ''
            }`}
          >
            Редактировать
          </button>
          <Link className="profile__exit-auth" to="/signin" onClick={signOut}>
            Выйти из аккаунта
          </Link>
        </nav>
      </form>
    </main>
  );
};

export default Profile;

import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useValidationForm from '../../hooks/useValidationForm';
import './Profile.css';

const Profile = ({ onSignOut, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, resetForm, errors, isValid } =
    useValidationForm();

  const validity =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser(values);
  };

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}</h2>
      <form className="profile__form" noValidate onSubmit={handleSubmit}>
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
              value={values.name || ''}
              onChange={handleChange}
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            />
            <span className="profile__error">{errors.name}</span>
          </label>
          <label className="profile__field">
            <span className="profile__input-title">E-mail</span>
            <input
              type="email"
              placeholder="E-mail"
              className="profile__input"
              id="edit-email"
              name="email"
              required
              value={values.email || ''}
              onChange={handleChange}
            />
            <span className="profile__error">{errors.email || ''}</span>
          </label>
        </fieldset>
        <nav className="profile__navigation">
          <button
            type="submit"
            disabled={validity ? true : false}
            className={`profile__edit-profile ${
              validity ? 'profile__edit-profile_disable' : ''
            }`}
          >
            Редактировать
          </button>
          <Link className="profile__exit-auth" to="/signin" onClick={onSignOut}>
            Выйти из аккаунта
          </Link>
        </nav>
      </form>
    </main>
  );
};

export default Profile;

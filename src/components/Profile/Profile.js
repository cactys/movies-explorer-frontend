import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.css';

const Profile = ({ signOut, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      name,
      email,
    });
  };

  useEffect(() => {
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
  }, [currentUser]);

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {name}</h2>
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
            value={name}
            onChange={handleNameChange}
          />
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
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </fieldset>
      <nav className="profile__navigation">
        <form className="profile__form" onSubmit={handleSubmit}>
          <button
            type="submit"
            className={`profile__edit-profile ${
              currentUser.name === name && currentUser.email === email
                ? 'profile__edit-profile_disable'
                : ''
            }`}
          >
            Редактировать
          </button>
        </form>
        <Link className="profile__exit-auth" to="/signin" onClick={signOut}>
          Выйти из аккаунта
        </Link>
      </nav>
    </main>
  );
};

export default Profile;

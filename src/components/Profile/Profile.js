import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../FormField/FormField';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('Владимир');
  const [email, setEmail] = useState('cactys95@yandex.ru');

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {name}</h2>
      <div className="profile__set-profile">
        <FormField
          className="profile"
          name="Имя"
          type="text"
          placeholder="Имя"
          id="edit-name"
          inputName="name"
          minLength="2"
          maxLength="30"
          value={name}
        />
        <FormField
          className="profile"
          name="E-mail"
          type="email"
          placeholder="E-mail"
          id="edit-email"
          inputName="email"
          value={email}
        />
      </div>
      <nav className="profile__navigation">
        <button className="profile__edit-profile">Редактировать</button>
        <Link className="profile__exit-auth" to="/">
          Выйти из аккаунта
        </Link>
      </nav>
    </div>
  );
};

export default Profile;

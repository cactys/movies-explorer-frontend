import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App/App';
import FormField from '../FormField/FormField';
import './Profile.css';

const Profile = () => {
  const { email, name } = useContext(Context);
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {name}</h2>
      <FormField
        className="profile"
        name="Имя"
        type="name"
        placeholder="Имя"
        id="edit-name"
        inputName="name"
        minLength="2"
        maxLength="30"
      />
      <div className="profile__info">
        <div className="profile__editor">
          <p className="profile__auth-title">Имя</p>
          <p className="profile__auth-editor">{name}</p>
        </div>
        <div className="profile__editor">
          <p className="profile__auth-title">E-mail</p>
          <p className="profile__auth-editor">{email}</p>
        </div>
      </div>
      <button className="profile__edit-profile">Редактировать</button>
      <Link className="profile__exit-auth" to="/">
        Выйти из аккаунта
      </Link>
    </div>
  );
};

export default Profile;

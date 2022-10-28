import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App/App';
import './Profile.css';

const Profile = () => {
  const { email, name } = useContext(Context);
  return (
    <div className='profile'>
      <h2 className='profile__title'>Привет, {name}</h2>
      <div className='profile__info'>
        <div className='profile__editor'>
          <p className='profile__auth-title'>Имя</p>
          <p className='profile__auth-editor'>{name}</p>
        </div>
        <div className='profile__editor'>
          <p className='profile__auth-title'>E-mail</p>
          <p className='profile__auth-editor'>{email}</p>
        </div>
      </div>
      <button className='profile__edit-profile'>Редактировать</button>
      <Link className='profile__exit-auth'>Выйти из аккаунта</Link>
    </div>
  )
}

export default Profile
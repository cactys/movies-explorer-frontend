import React from 'react'
import { useContext } from 'react';
import { Context } from '../App/App';

const Profile = () => {
  const { email, name } = useContext(Context);
  return (
    <div className='profile'>
      {email} : {name}
    </div>
  )
}

export default Profile
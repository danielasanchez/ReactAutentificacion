import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiProvider, { ApiContext } from '../Context/ApiContext';

import { useEffect, useState, useContext } from 'react';


const Cuenta = () => {
  const { createUser, user, logout, signIn } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Email: {user && user.email}</p>

    </div>
  );
};

export default Cuenta;

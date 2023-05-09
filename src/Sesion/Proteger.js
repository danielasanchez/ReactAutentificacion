import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { ApiContext } from '../Context/ApiContext';

const Proteger = ({ children }) => {
  
  const { createUser, user, logout, signIn } = useContext(ApiContext);
  console.log(user)
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default Proteger;
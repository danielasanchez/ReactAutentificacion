import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { ApiContext } from '../Context/ApiContext';

const Proteger = (props) => {
  
  const { user } = useContext(ApiContext);
  console.log(user)
  if (!user) {
    return <Navigate to='/' />;
  }
  return props.children;
};

export default Proteger;
import React from 'react';
import { ApiContext } from '../Context/ApiContext';
import { useContext } from 'react';


const Cuenta = () => {
  const { user} = useContext(ApiContext);

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h3>Cuenta</h3>
      <p>User Email: {user && user.email}</p>

    </div>
  );
};

export default Cuenta;

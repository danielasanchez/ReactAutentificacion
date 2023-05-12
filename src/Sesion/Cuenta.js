import React from 'react';
import { ApiContext } from '../Context/ApiContext';
import { useContext } from 'react';


const Cuenta = () => {
  const { user } = useContext(ApiContext);

  //si no tienen una coleccion user.name no tendria valor
  return (
    <div className='Form'>
      <h3>Informacion de la cuenta</h3>
      <h4>Nombre: {user.name}</h4>
      <h4>Email: {user.email}</h4>
    </div>
  );
};

export default Cuenta;

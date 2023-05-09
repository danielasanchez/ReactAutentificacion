//yarn add react-router-dom
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './Pages/Detalle';
import Home from './Pages/Home';
import Informacion from './Pages/Informacion';
import Contacto from './Pages/Contacto'
import Encabezado from './Components/Encabezado';
import NavBar from './Components/NavBar';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { firebase } from './Settings/ConfigFirebase';
import auth from './Settings/ConfigFirebase';
import { useEffect, useState } from 'react';
import CrearCuenta from './Sesion/CrearCuenta';

import IniciarSesion from './Sesion/IniciarSesion';
import ApiProvider, { ApiContext } from './Context/ApiContext';
import Proteger from './Sesion/Proteger';
import Cuenta from './Sesion/Cuenta';


function App() {




  return (
    <div className="App">

      <ApiProvider>

        <Encabezado />

        <Routes>
          <Route path='/' element={<IniciarSesion />} />
          <Route path='/crearcuenta' element={<CrearCuenta />} />
          <Route path="*" element={<Navigate to="/" />} />



          <Route path='/inicio'
            element={
              <Proteger>
                <NavBar />
                <Home />
              </Proteger>
            }
          />

          <Route path='/detalle/:id'
            element={
              <Proteger>
                <NavBar />
                <Detalle />
              </Proteger>
            }
          />

          <Route path='/informacion'
            element={
              <Proteger>
                <NavBar />
                <Informacion />
              </Proteger>
            }
          />

          <Route path='/contacto'
            element={
              <Proteger>
                <NavBar />
                <Contacto />
              </Proteger>
            }
          />

          <Route path='/cuenta'
            element={
              <Proteger>
                <NavBar />
                <Cuenta />
              </Proteger>
            }
          />
        </Routes>

      </ApiProvider>


    </div>
  );

}
//en path indican que ruta quieren que se vea en la url
//utilizamos path="*"... para indicar que cualquier ruta que ponga el usuario
//y que no tengamos establecida lo mande a la pagina principal.
//en  path='/detalle/:id' el "id" se va a sustituir por el id de la pelicula
export default App;


/*

<Route path="*" element={<Navigate to="/" />} />
                <Encabezado />
                <NavBar />
                <Route path='/detalle/:id' element={<Detalle />} />
                <Route path='/informacion' element={<Informacion />} />
                <Route path='/contacto' element={<Contacto />} />


*/
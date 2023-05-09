//yarn add react-router-dom
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalle from './Pages/Detalle';
import Home from './Pages/Home';
import Informacion from './Pages/Informacion';
import Contacto from './Pages/Contacto'
import Encabezado from './Components/Encabezado';
import NavBar from './Components/NavBar';
import { Routes, Route, Navigate } from "react-router-dom";
import CrearCuenta from './Sesion/CrearCuenta';
import IniciarSesion from './Sesion/IniciarSesion';
import ApiProvider from './Context/ApiContext';
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

export default App;


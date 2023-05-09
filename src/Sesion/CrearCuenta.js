import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from "../Context/ApiContext";



const CrearCuenta = () => {
    const { createUser, error, setError } = useContext(ApiContext);
    const [usuario, setUsuario] = useState({});
    const navigate = useNavigate();

    const guardarCambios = (e) => {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const crearUsuario = async (e) => {
        e.preventDefault();
        setError('Ingresa tus datos');
        try {
            await createUser(usuario).then((userCredential) => {
                // Signed in
                console.log(userCredential)
                
                //var user = userCredential.user;
                // ...
                alert("In")
                navigate('/inicio')

            })
            .catch((error) => {
                //alert(error.message)
                setError(error.message)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
            
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };
    return (

        <div className='Form'>
            <h1>Crear cuenta</h1>
            <Form onSubmit={crearUsuario}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={guardarCambios}
                        value={usuario.email}
                        name="email"

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={guardarCambios}
                        value={usuario.password}
                        name="password"
                    />
                    <Form.Text className="text-muted">
                        {error}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrar
                </Button>
                <Link to='/'>
                    Si ya tienes cuenta inicia sesion
                </Link>
            </Form>
        </div>

    );
}

export default CrearCuenta;


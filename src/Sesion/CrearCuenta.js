import '../App.css'
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { ApiContext } from "../Context/ApiContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
            await createUser(usuario).then(() => {
                // Signed in

                navigate('/inicio')

            }).catch((error) => {
                //alert(error.message)
                setError(error.message)
                //var errorCode = error.code;
                //var errorMessage = error.message;
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
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        onChange={guardarCambios}
                        value={usuario.name}
                        name="name"

                    />
                </Form.Group>
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
                    Si ya tienes cuenta, inicia sesion
                </Link>
            </Form>
        </div>

    );
}

export default CrearCuenta;


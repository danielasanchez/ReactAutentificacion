
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../Context/ApiContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const IniciarSesion = () => {

    const { signIn, error, setError } = useContext(ApiContext);
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    });

    const guardarCambios = (e) => {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const iniciar = async (e) => {
        e.preventDefault();
        setError('Ingresa tus datos');
        try {
            await signIn(usuario).then((userCredential) => {
                // Signed in
                console.log(userCredential)
                alert("Entrando")
                navigate('/inicio')
            })
            .catch((error) => {
                setError(error.message)
                //var errorCode = error.code;
                //var errorMessage = error.message;
            });
            
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    };

    return (
        <div className='Form'>
            <h1>Inicia sesion</h1>
            <Form onSubmit={iniciar}>
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
                    Iniciar
                </Button>
                <Link to='/crearcuenta'>
                    Crear cuenta
                </Link>
            </Form>
        </div>
    );
};

export default IniciarSesion;
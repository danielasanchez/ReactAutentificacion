
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
//import { firebase } from './Settings/ConfigFirebase';
import auth from '../Settings/ConfigFirebase';

const Signin = (props) => {

    const [error, setError] = useState("No hay")

    const guardarCambios = (e) => {

         props.setUsuario({
            ...props.usuario,
            [e.target.name]: e.target.value
        })
    }
    const crearUsuario = (e) => {

        e.preventDefault();

        signInWithEmailAndPassword(auth, props.usuario.email, props.usuario.password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential)
                props.setLogueado(true)
                //var user = userCredential.user;
                // ...
                alert("Entrando")
            })
            .catch((error) => {
                //alert(error.message)
                setError(error.message)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

    }


    return (
        <Form onSubmit={crearUsuario}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={guardarCambios}
                    value={props.usuario.email}
                    name="email"

                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={guardarCambios}
                    value={props.usuario.password}
                    name="password"
                />
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Signin;
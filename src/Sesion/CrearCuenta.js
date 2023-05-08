import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
//import { firebase } from './Settings/ConfigFirebase';
import auth from '../Settings/ConfigFirebase';

const CrearCuenta = (props) => {

    const [error, setError] = useState("")

    const guardarCambios = (e) => {

         props.setUsuario({
            ...props.usuario,
            [e.target.name]: e.target.value
        })
    }
    const crearUsuario = (e) => {

        e.preventDefault();

        createUserWithEmailAndPassword(auth, props.usuario.email, props.usuario.password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential)
                props.setLogueado(true)
                //var user = userCredential.user;
                // ...
                alert("Registrado")
                //crearGalleta()
            })
            .catch((error) => {
                //alert(error.message)
                setError(error.message)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

    }

    /*const crearGalleta = () =>{
        app.post('/sessionLogin', (req, res) => {
            // Get the ID token passed and the CSRF token.
            const idToken = req.body.idToken.toString();
            const csrfToken = req.body.csrfToken.toString();
            // Guard against CSRF attacks.
            if (csrfToken !== req.cookies.csrfToken) {
              res.status(401).send('UNAUTHORIZED REQUEST!');
              return;
            }
            // Set session expiration to 5 days.
            const expiresIn = 60 * 60 * 24 * 5 * 1000;
            // Create the session cookie. This will also verify the ID token in the process.
            // The session cookie will have the same claims as the ID token.
            // To only allow session cookie setting on recent sign-in, auth_time in ID token
            // can be checked to ensure user was recently signed in before creating a session cookie.
            getAuth()
              .createSessionCookie(idToken, { expiresIn })
              .then(
                (sessionCookie) => {
                  // Set cookie policy for session cookie.
                  const options = { maxAge: expiresIn, httpOnly: true, secure: true };
                  res.cookie('session', sessionCookie, options);
                  res.end(JSON.stringify({ status: 'success' }));
                },
                (error) => {
                  res.status(401).send('UNAUTHORIZED REQUEST!');
                }
              );
          });
          
    }*/

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
                Registrar
            </Button>
            <Link to='/'>
                Si ya tienes cuenta inicia sesion
            </Link>
        </Form>
 
    );
}

export default CrearCuenta;
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useEffect, useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
//import { firebase } from './Settings/ConfigFirebase';
import auth from '../Settings/ConfigFirebase';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from "../Context/ApiContext";



const CrearCuenta = (props) => {
    const { createUser, user, logout, signIn } = useContext(ApiContext);
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")

    const guardarCambios = (e) => {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const crearUsuario = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(usuario);
            navigate('/inicio')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };
    return (

        <div className='max-w-[700px] mx-auto my-16 p-4'>
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

/*
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








*/
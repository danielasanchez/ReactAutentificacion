
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
//import { firebase } from './Settings/ConfigFirebase';
import auth from '../Settings/ConfigFirebase';
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../Context/ApiContext";

const IniciarSesion = (props) => {

    const { createUser, user, logout, signIn, error, setError } = useContext(ApiContext);
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
        setError('');
        try {
            await signIn(usuario)
            navigate('/inicio')
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    };

    return (
        <div className='max-w-[700px] mx-auto my-16 p-4'>
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

/*

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
//import { firebase } from './Settings/ConfigFirebase';
import auth from '../Settings/ConfigFirebase';
import { Link } from "react-router-dom";

const IniciarSesion = (props) => {

    const [error, setError] = useState("")

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
        <>
        <h1>Inicia sesion</h1>
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
                Iniciar sesion
            </Button>
            <Link to='/'>
               Crear cuenta
            </Link>
        </Form>
        </>
    );
}

export default IniciarSesion;










*/
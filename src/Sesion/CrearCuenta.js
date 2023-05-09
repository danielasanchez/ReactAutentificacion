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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/inicio')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };
    return (

        <div className='max-w-[700px] mx-auto my-16 p-4'>
            <div>
                <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
                <p className='py-2'>
                    Already have an account yet?{' '}
                    <Link to='/' className='underline'>
                        Sign in.
                    </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email Address</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='border p-3'
                        type='email'
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='border p-3'
                        type='password'
                    />
                </div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                    Sign Up
                </button>
            </form>
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
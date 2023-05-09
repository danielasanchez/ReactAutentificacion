import { createContext, useContext, useEffect, useState } from 'react';
//import Swal from 'sweetalert2';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';
import auth from '../Settings/ConfigFirebase';


export const ApiContext = createContext();

const ApiProvider = (props) => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("Ingresa tus datos")

    const createUser = (usuario) => {
        return createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
    };

    const signIn = (usuario) => {
        return signInWithEmailAndPassword(auth, usuario.email, usuario.password)
    }

    const logOut = () => {
        alert("Adios "+ user.email)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <ApiContext.Provider 
            value={{ 
                user,
                error,
                setError,
                createUser, 
                signIn, 
                logOut, 

        }}>
            {props.children}
        </ApiContext.Provider>
    );
};
export default ApiProvider;
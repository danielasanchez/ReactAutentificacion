import { createContext, useContext, useEffect, useState } from 'react';
//import Swal from 'sweetalert2';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';
import auth from '../Settings/ConfigFirebase';


export const ApiContext = createContext();

const ApiProvider = (props) => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("hoka")

    const createUser = (usuario) => {
        return createUserWithEmailAndPassword(auth, usuario.email, usuario.password);
    };

    const signIn = (usuario) => {
        signInWithEmailAndPassword(auth, usuario.email, usuario.password).then((userCredential) => {
            // Signed in
            console.log(userCredential)
            alert("Entrando")
        })
        .catch((error) => {
            setError(error.message)
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }

    const logout = () => {
        alert("adios "+ user.email)
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
                createUser, 
                user,
                error,
                setError,
                logout, 
                signIn 
        }}>
            {props.children}
        </ApiContext.Provider>
    );
};
export default ApiProvider;
import { createContext, useContext, useEffect, useState } from 'react';
//import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import auth, { firebase } from '../Settings/ConfigFirebase';
import { getDatabase, ref, onValue, update } from "firebase/database";


export const ApiContext = createContext();

const ApiProvider = (props) => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("Ingresa tus datos")

    const createUser = (usuario) => {
        return createUserWithEmailAndPassword(auth, usuario.email, usuario.password).then((userCredential) => {

            //Esto se agrega porque Arzate quiere que cuando se haga una cuenta, los datos
            //se pasen tambien a una coleccion, en nuestro ejemplo agregamos el atributo "name"
            //en el formulario
            //console.log(userCredential.user.uid)
            const { name } = usuario;
            const vacios = (name.length === 0)
            if (!vacios) {
                update(ref(firebase, 'Usuarios/' + userCredential.user.uid), usuario)
                    .then(() => {

                    })
            }
        })
    };

    const signIn = (usuario) => {
        return signInWithEmailAndPassword(auth, usuario.email, usuario.password)
    }

    const logOut = () => {
        alert("Adios " + user.name)
        setUser(null)//esta linea se agrega por el uso de la coleccion usuarios
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            //const uid = currentUser.uid;

            //Esto lo agrego porque Arzate queria guardar los datos del usuario en una coleccion 
            //si existe en la coleccion ese uid, lo busca en la coleccion de Usuarios para traernos
            //el atributo "name"
            if (currentUser.uid) {
                const db = getDatabase();
                const starCountRef = ref(db, 'Usuarios/' + currentUser.uid);
                onValue(starCountRef, (snapshot) => {
                    const data = snapshot.val();
                    setUser(data);
                });
            }

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
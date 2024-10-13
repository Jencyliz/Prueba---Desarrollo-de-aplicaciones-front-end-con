// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase, reemplaza con tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyDTewESS6TtQRG4J1TGmGfufubxsps3mZY",
    authDomain: "pruebaapp-6535b.firebaseapp.com",
    projectId: "pruebaapp-6535b",
    storageBucket: "pruebaapp-6535b.appspot.com",
    messagingSenderId: "513440053170",
    appId: "1:513440053170:web:db48f0c5eb835edad016ab"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

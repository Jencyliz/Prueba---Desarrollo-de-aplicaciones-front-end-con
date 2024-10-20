import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBkbuG0EAnOosjyb33b9XnJYaafmK6eH4",
    authDomain: "pruebaapp1-734cb.firebaseapp.com",
    projectId: "pruebaapp1-734cb",
    storageBucket: "pruebaapp1-734cb.appspot.com",
    messagingSenderId: "778326109822",
    appId: "1:778326109822:web:3346e31f8e1b3218fbb22f"
  };
  
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

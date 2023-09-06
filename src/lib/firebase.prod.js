import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
const config = {
    apiKey: "AIzaSyAc2Ewjooy0N6RSzhLNPLLy4w0k86CPI2A",
    authDomain: "netflixxx-61a27.firebaseapp.com",
    projectId: "netflixxx-61a27",
    storageBucket: "netflixxx-61a27.appspot.com",
    messagingSenderId: "505613540434",
    appId: "1:505613540434:web:aeef97f57eaae9ac8c938b"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };